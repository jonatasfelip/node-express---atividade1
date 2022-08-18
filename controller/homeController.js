//Criaremos funções//
class HomeController{ 
    //Elementos//
    index(req, res){
        res.render('index.ejs');
    }
    login(req, res){
        res.render('pages/login');
    }
}

//Exportar o homeController://
module.exports = new HomeController();