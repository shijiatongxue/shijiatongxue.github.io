import { Parser } from 'xml2js';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { get } from 'lodash-es';
import axios from 'axios';
import * as url from 'url';

async function getPhotosXML({ token, url }) {
    const res = await axios(url, {
        headers: {
            'Authorization': token,
        }
    });

    const xml = get(res, 'data', '');

    if (!xml) {
        console.warn('get photos xml content error', res);
        process.exit(1);
    }

    return xml;
}

async function getPhotosJSON(xml) {
    const parser = new Parser();
    const result = await parser.parseStringPromise(xml);
    return result;
}

function getPhotosURL({ urlPrefix, json }) {
    const urlList = [];
    if (typeof json === 'object' && Object.keys(json).length !== 0) {
        const contents = get(json, 'ListBucketResult.Contents');
        if (Array.isArray(contents) && contents.length) {
            for (let content of contents) {
                const { Key } = content;
                const photoURL = `${urlPrefix}/${Key}`;
                urlList.push({ url: photoURL });
            }
        }
    }

    urlList.reverse();

    return urlList;
}

function saveURL({ urlPath, urlList }) {
    const photos = `const COS_PHOTOS=${JSON.stringify(urlList)};\n\nexport default COS_PHOTOS;`
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    writeFileSync(resolve(__dirname, urlPath), photos);
}

async function main() {
    const urlPrefix = 'https://s-1307850796.cos.ap-beijing.myqcloud.com';
    const urlPath = '../src/const/photos.ts';
    try {
        const xml = await getPhotosXML({ url: urlPrefix, token: process.env.COS_TOKEN });
        const json = await getPhotosJSON(xml);
        const urlList = getPhotosURL({ urlPrefix, json });
        saveURL({ urlPath, urlList });
    } catch (err) {
        console.error(err.message);
    }
}

main();
