const path = require('path');
const fs = require('fs/promises');
const http = require('http');

//Cuando alguien ingrese al servidor vamos a responder con el html

const app = http.createServer(async (request, response) => {
    const url = request.url; //dice la ruta en donde se hace la peticion
    console.log(url)
    if(url === '/')
    {
        const htmlPath = path.resolve('./lombok/index.html');
        const html = await fs.readFile(htmlPath, 'utf8');
        //console.log(html);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
    }
    if(url === '/styles/normalize.css')
    {
        const cssPath = path.resolve('./lombok/styles/normalize.css');
        const css = await fs.readFile(cssPath, 'utf8' );
        response.setHeader('Content-Type', 'text/css');
        response.write(css);
    }
    if(url === '/styles/styles.css')
    {
        const cssPath = path.resolve('./lombok/styles/styles.css');
        const css = await fs.readFile(cssPath, 'utf8' );
        response.setHeader('Content-Type', 'text/css');
        response.write(css);
    }
    response.end();
});

const PORT = 8000;

app.listen(PORT);

console.log('Servidor escuchando');