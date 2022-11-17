const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                // res.render('courses/show', {course: mongooseToObject(course)})
                res.json(course)
            })
            .catch(next)
    }
    create(req, res, next){
        res.render('courses/create')
    }
}

module.exports = new CourseController();
