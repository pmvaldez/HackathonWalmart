const request = require('request-promise');
const cheerio = require('cheerio');
const writeJson = require('write-json');

//funcion para realizar el scraping a página dle minsal
async function init() {

    // array para guardar datos extraidos noticias del seremi metropolitana
    const data = [];
    try {
        const $ = await request({
            uri: 'https://seremi13.redsalud.gob.cl/',
            transform: body => cheerio.load(body)
        });

        //const tags = [];
        $('.new').each((i, el) => {
            const fecha = $(el).find('span.meta').text();
            const titulo = $(el).find('h4.title').text();
            const link = $(el).find('a').attr('href');
            const img =  $(el).find('img.attachment-320x210').attr('src');
            //tags.push(tag);
   
            //estructura de la data
            const feed = {
                date: fecha,
                author: 'minsal',
                title: titulo,
                link: link,
                img: img,
            };
            //guarda los datos en el array de la data
            data.push(feed);
            console.log("dattaa", data)
        })
        //convierte el array de la data aun json
        writeJson('minsal.json', {
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