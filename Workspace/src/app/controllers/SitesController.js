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
    home(req, res, next) {

        // res.render('home');
        Course.find({})
            .then(courses => res.render('home'))
            .catch(error => next(error));
    }
}

module.exports = new SitesController();
