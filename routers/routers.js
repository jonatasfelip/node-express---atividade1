//qual função eu quero exibir
const { Router } = require('express'); //importando o router
const routers = new Router(); //Instanciando o router

const  Home = require('../controller/homeController');  //Importando o controller

//Definir as rotas
//Index:
routers.get('/', Home.index);
//Login:
routers.get('/login', Home.login);

//Exportar as rotas
module.exports = routers;