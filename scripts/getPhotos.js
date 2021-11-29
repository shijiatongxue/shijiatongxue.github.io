const parser = require('xml2json');
const fs = require('fs');
const path = require('path')
const get = require('lodash/get');

function getPhotosJSON(xmlPath) {
    const xml = fs.readFileSync(path.resolve(__dirname, xmlPath));
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
    return urlList;
}

function saveURL({ urlPath, urlList }) {
    const photos = `const COS_PHOTOS=${JSON.stringify(urlList)};\n\nexport default COS_PHOTOS;`
    fs.writeFileSync(path.resolve(__dirname, urlPath), photos);
}

function main() {
    const xmlPath = './photos.xml';
    const urlPrefix = 'https://s-1307850796.cos.ap-beijing.myqcloud.com';
    const urlPath = '../src/const/photos.ts';
    const json = getPhotosJSON(xmlPath);
    const urlList = getPhotosURL({ urlPrefix, json });
    saveURL({ urlPath, urlList });
}

main();
