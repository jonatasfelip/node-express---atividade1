//qual função eu quero exibir
const { Router } = require('express'); //importando o router
const routers = new Router(); //Instanciando o router
const Home = require('../controller/homeController');  //Importando o controller
const Session = require('../controller/sessionController');  //Importando o session
const auth = require('../middleware/auth') ;

//Definir as rotas
//Index:
routers.get('/', Home.index);

//Login:
routers.get('/login', Session.login);

//Logar:
routers.post('/logar', Session.logar);

//Home:
routers.get('/home', auth, Home.home);

//Logout:
routers.get('/logout', Session.logout);

//Exportar as rotas
module.exports = routers;