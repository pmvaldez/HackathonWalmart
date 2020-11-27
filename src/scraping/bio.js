const request = require('request-promise');
const cheerio = require('cheerio');
const writeJson = require('write-json');

//funcion para realizar el scraping a página dle minsal
async function init() {

    // array para guardar datos extraidos noticias del seremi metropolitana
    const data = [];
    try {
        const $ = await request({
            uri: 'https://www.seremidesaludbiobio.cl/sd/web/',
            transform: body => cheerio.load(body)
        });

        //const tags = [];
        $('section.tab-noticias section.area-trabajo section.cont-noticias .slider .slidesContainer').each((i, el) => {
            const fecha = $(el).find('span.fecha').text();
            const titulo =  $(el).find('p.cont-1').text();
            const link = $(el).find('a').attr('href');
            const img =  $(el).find('img').attr('src');
            //tags.push(tag);
        
            //estructura de la data
            const feed = {
                date: fecha,
                author: 'Seremi Región del Bío-Bío',
                title: titulo,
                link: link,
                img: img,
            };
            //guarda los datos en el array de la data
            data.push(feed);
            console.log("dataBioBio", data)
        })
        //convierte el array de la data aun json
        writeJson('bio.json', {
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