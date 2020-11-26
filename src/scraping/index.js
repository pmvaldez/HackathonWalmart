const request = require('request-promise');
const cheerio = require('cheerio');

const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.json');

var writeJson = require('write-json');

async function init() {


    // async
    const data = [];

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

            const feed = {
                created_at: text,
                entry_id: 33358,
                field1: author,
                field2: tag,

            };

            data.push(feed);
            console.log("kipa")
            console.log("dattaa", data)
        })

        writeJson('foo.json', {
            data
        }, function (err) {
            console.log("erro")
        });
        console.log(data)

    } catch (e) {
        console.log(e);
    }
}

init();