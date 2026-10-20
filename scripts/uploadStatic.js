import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import COS from 'cos-nodejs-sdk-v5';

const SecretId = process.env.COSSecretId;
const SecretKey = process.env.COSSecretKey;

if (!SecretId || !SecretKey) {
  throw new Error('COSSecretId and COSSecretKey are required to upload and verify assets.');
}

const cos = new COS({ SecretId, SecretKey });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Bucket = 'site-1307850796';
const Region = 'ap-beijing';
const assetDir = 'assets';

function callCos(method, params) {
  return new Promise((resolve, reject) => {
    cos[method](params, (err, data) => (err ? reject(err) : resolve(data)));
  });
}

async function main() {
  const staticDir = path.join(__dirname, '../docs/assets');
  const files = fs.readdirSync(staticDir).filter((file) =>
    fs.statSync(path.join(staticDir, file)).isFile()
  );
  if (files.length === 0) throw new Error(`No static assets found in ${staticDir}`);

  const data = await callCos('getBucket', {
    Bucket,
    Region,
    Prefix: `${assetDir}/`,
    Delimiter: '/',
  });
  const existing = new Set((data.Contents ?? []).map((item) => item.Key));
  const pending = files
    .map((file) => ({
      Bucket,
      Region,
      Key: `${assetDir}/${file}`,
      FilePath: path.join(staticDir, file),
    }))
    .filter((file) => !existing.has(file.Key));

  if (pending.length) {
    await new Promise((resolve, reject) => {
      const failures = [];
      cos.uploadFiles(
        {
          files: pending,
          onProgress(info) {
            const percent = Math.floor(info.percent * 10000) / 100;
            console.log(`Upload progress: ${percent}%`);
          },
          onFileFinish(err, _data, options) {
            if (err) failures.push(`${options.Key}: ${err.message}`);
            else console.log(`Uploaded ${options.Key}`);
          },
        },
        (err) => {
          if (err) failures.push(err.message);
          if (failures.length) reject(new Error(failures.join('\n')));
          else resolve();
        }
      );
    });
  }

  // The HTML must not be published until every referenced COS asset is present
  // with the exact size produced by this build.
  for (const file of files) {
    const key = `${assetDir}/${file}`;
    const localSize = fs.statSync(path.join(staticDir, file)).size;
    const remote = await callCos('headObject', { Bucket, Region, Key: key });
    const remoteSize = Number(remote.ContentLength);
    if (!Number.isFinite(remoteSize) || remoteSize !== localSize) {
      throw new Error(
        `COS verification failed for ${key}: local=${localSize}, remote=${remote.ContentLength}`
      );
    }
    console.log(`Verified ${key} (${remoteSize} bytes)`);
  }
}

main().catch((error) => {
  console.error('Static asset upload or verification failed:', error.message);
  process.exitCode = 1;
});
