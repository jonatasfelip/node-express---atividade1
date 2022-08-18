const express = require('express'); //importar express//
const { engine } = require('express/lib/application'); //definir a engine do projeto. quais os tipos de arquvio que eu quero expressar//
const app = express(); //instanciar o app do express//

app.set('view engine', 'ejs'); // Serve para utilizarmos o ejs//
app.set('views', './views'); //diz qual é a pasta onde o ejs está//

//Importar as rotas e configurá-las:
const routers = require('./routers/routers');
app.use(routers);

const hostname = 'localhost';
const port = 3333;

//Abrindo/iniciando o servidor//
app.listen(port, () =>{
    console.log(`Servidor iniciado em http://${hostname}:${port}`)
})