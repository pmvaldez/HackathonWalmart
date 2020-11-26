const request = require('request-promise');
const cheerio = require('cheerio');
const writeJson = require('write-json');

//funcion para realizar el scraping a página dle minsal
async function init() {

    // array para guardar datos extraidos noticias del minsal
    const data = [];
    try {
        // const response = await request('http://quotes.toscrape.com/'); otra opcion de hacer el llamado
        const $ = await request({
            uri: 'https://dipol.minsal.cl/category/noticias/',
            transform: body => cheerio.load(body)
        });

        //const tags = [];
        $('.post').each((i, el) => {
            const fecha = $(el).find('span.meta').text();
            const titulo = $(el).find('h4.title').text();
          
            //const link = `https://dipol.minsal.cl/${titulo}`
            const link = titulo.link(`https://dipol.minsal.cl/${titulo}`);
            //const tag = $(el).find('.tags a').html();
            //tags.push(tag);
           
            //estructura de la data
            const feed = {
                date: fecha,
                title: titulo,
                link: link,
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