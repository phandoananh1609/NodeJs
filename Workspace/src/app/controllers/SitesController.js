
class SitesController {
    //GET news
    news(req,res){
        res.render('news');
    }
    //get slug
    show(req,res){
        res.send('news detail')
    }
    //get search
    search(req,res){
        res.render('search');
    }
    home(req,res){
        res.render('home')
    }
}

module.exports = new SitesController;