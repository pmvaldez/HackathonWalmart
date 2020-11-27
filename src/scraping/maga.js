const request = require('request-promise');
const cheerio = require('cheerio');
const writeJson = require('write-json');

//funcion para realizar el scraping a página dle minsal
async function init() {

    // array para guardar datos extraidos noticias del seremi metropolitana
    const data = [];
    try {
        const $ = await request({
            uri: 'https://seremi12.redsalud.gob.cl/',
            transform: body => cheerio.load(body)
        });

        //const tags = [];
        $('.home ul.news li').each((i, el) => {
            const fecha = $(el).find('time').text().replace(/(^\“|\”$)/g, "");
            //const titulo = $(el).find('a.image').text();
            const titulo =  $(el).find('li article h2 a').text();
            const link = $(el).find('a').attr('href');
            const img =  $(el).find('img').attr('src');
            //tags.push(tag);
        
            //estructura de la data
            const feed = {
                date: fecha,
                author: 'Seremi Región de Magallanes',
                title: titulo,
                link: link,
                img: img,
            };
            //guarda los datos en el array de la data
            data.push(feed);
            console.log("dataMagallanes", data)
        })
        //convierte el array de la data aun json
        writeJson('maga.json', {
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