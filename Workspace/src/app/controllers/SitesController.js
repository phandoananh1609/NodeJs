const Course = require('../models/Course')

class SitesController {
    //GET news
    news(req, res) {
        res.render('news');
    }
    //get slug
    show(req, res) {
        res.send('news detail');
    }
    //get search
    search(req, res) {
        res.render('search');
    }
    home(req, res) {
        Course.find({}, function(err, cac) {
            if(!err){
                res.json(cac);
                return;
            }
            res.status(400).json({error: "Error"});
        })
        // res.render('home');
    }
}

module.exports = new SitesController();
