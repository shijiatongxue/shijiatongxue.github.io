import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import COS from 'cos-nodejs-sdk-v5';

const cos = new COS({
  SecretId: process.env.COSSecretId,
  SecretKey: process.env.COSSecretKey,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Bucket = 'site-1307850796';
const Region = 'ap-beijing';
const assetDir = 'assets';

/**
 * @see https://cloud.tencent.com/document/product/436/64980
 */
async function main() {
  // 获取文件
  const staticDir = path.join(__dirname, '../docs/assets');
  const files = fs.readdirSync(staticDir);
  console.log('assets:', files);
  let cosFiles = files.map((file) => ({
    Bucket,
    Region,
    Key: `${assetDir}/${file}`,
    FilePath: `${staticDir}/${file}`,
  }));

  // 查看是否已经上传
  const data = await new Promise((resolve, reject) => {
    cos.getBucket(
      {
        Bucket,
        Region,
        Prefix: `${assetDir}/`,
        Delimiter: '/',
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
  if (data) {
    const { Contents } = data ?? {};
    if (Array.isArray(Contents)) {
      cosFiles = cosFiles.filter((cosFile) => {
        const exist = Contents.findIndex((item) => item.Key === cosFile.Key) > -1;
        return !exist;
      });
    }
  }
  if (cosFiles.length === 0) {
    console.log('no file need to upload');
    return;
  }

  // 只长传不存在的文件
  console.log('update files number: ', cosFiles.length);
  cos.uploadFiles(
    {
      files: cosFiles,
      onProgress: function (info) {
        var percent = parseInt(info.percent * 10000) / 100;
        var speed = parseInt((info.speed / 1024 / 1024) * 100) / 100;
        console.log('进度：' + percent + '%; 速度：' + speed + 'Mb/s;');
      },
      onFileFinish: function (err, data, options) {
        console.log(options.Key + '上传' + (err ? '失败' : '完成'));
      },
    },
    function (err, data) {
      console.log(err || data);
    }
  );
}

main();
