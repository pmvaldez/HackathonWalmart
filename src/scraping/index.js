const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.json');

var writeJson = require('write-json');

/* async function init2() {

    // async
    const data = [];

    try {
        // const response = await request('http://quotes.toscrape.com/');
        const $ = await request({
            uri: 'https://www.gob.cl/coronavirus/pasoapaso#documentos/',
            transform: body => cheerio.load(body)
        });

        writeStream.write('Quote|Author|Tags\n');
        const tags = [];
        $('.card').each((i, el) => {
            const text = $(el).find('h5 .card-title').text() .replace(/(^\“|\”$)/g, "");
            const author = $(el).find('a').text();
            const doc = $(el).find('a').html();
            const tag = $(el).find('.tags a').html();
            tags.push(tag);

            const feed = {
                text: text,
                pdf: doc,
                autor: author,
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
} */

async function init() {

    // async
    const data = [];

    try {
        // const response = await request('http://quotes.toscrape.com/');
        const $ = await request({
            uri: 'https://www.bcn.cl/publicaciones/ediciones-bcn',
            transform: body => cheerio.load(body)
        });

        writeStream.write('Quote|Author|Tags\n');
        //const tags = [];
        $('.informes').each((i, el) => {
            const text = $(el).find('h3').text().replace(/(^\“|\”$)/g, "");
            const author = $(el).find('p').text();
            //const doc = $(el).find('a').html();
            //const tag = $(el).find('.tags a').html();
            //tags.push(tag);
            console.log('text', text)
            console.log('auth', author)
            const feed = {
                text: text,
                //pdf: doc,
                autor: author,
               /*  field2: tag, */
            };

            data.push(feed);
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