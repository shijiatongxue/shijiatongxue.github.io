const parser = require('xml2json');
const fs = require('fs');
const path = require('path')
const get = require('lodash/get');
const axios = require('axios');

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

function getPhotosJSON(xml) {
    const json = JSON.parse(parser.toJson(xml));
    return json;
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
    fs.writeFileSync(path.resolve(__dirname, urlPath), photos);
}

async function main() {
    const urlPrefix = 'https://s-1307850796.cos.ap-beijing.myqcloud.com';
    const urlPath = '../src/const/photos.ts';
    const xml = await getPhotosXML({ url: urlPrefix, token: process.env.COS_TOKEN });
    const json = getPhotosJSON(xml);
    const urlList = getPhotosURL({ urlPrefix, json });
    saveURL({ urlPath, urlList });
}

main();
