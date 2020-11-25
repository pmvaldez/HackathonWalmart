const request = require('request-promise');
const cheerio = require('cheerio');

const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.csv');
const writeJson = fs.createWriteStream('quotes.json');

async function init() {
    try {
        // const response = await request('http://quotes.toscrape.com/');
        const $ = await request({
            uri: 'http://quotes.toscrape.com/',
            transform: body => cheerio.load(body)
        });

        writeStream.write('Quote|Author|Tags\n');
        const tags = [];
        $('.quote').each((i, el) => {
            const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g, "");
            const author = $(el).find('span small.author').text();
            const tag = $(el).find('.tags a').html();
            tags.push(tag);
            // console.log(text, author, tags.join(','))
            writeStream.write(`${text}|${author}|${tags}\n`);
            // console.log(i, text, author)
        })
        const csvFilePath='quotes.csv'
        const csv=require('csvtojson')
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj);
            writeJson.write(jsonObj)
        })
         
        // Async / await usage
        const jsonArray=await csv().fromFile(csvFilePath);
        console.log(jsonArray);

    } catch (e) {
        console.log(e);
    }
}

init();