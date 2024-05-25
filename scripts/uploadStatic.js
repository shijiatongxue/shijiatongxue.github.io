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

/**
 * @see https://cloud.tencent.com/document/product/436/64980
 */
async function main() {
  const host = 'https://site-1307850796.cos.ap-beijing.myqcloud.com';
  const staticDir = path.join(__dirname, '../docs/assets');
  const files = fs.readdirSync(staticDir);
  console.log('assets:', files);
  const cosFiles = files.map((file) => ({
    Bucket: 'site-1307850796',
    Region: 'ap-beijing',
    Key: `assets/${file}`,
    FilePath: `${staticDir}/${file}`,
  }));
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
