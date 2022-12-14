const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(next)
    }
    //GET /courses/create
    create(req, res, next){
        res.render('courses/create')
    }
    //POST /courses/store
    store(req, res, next){
        const fromData = req.body;
        fromData.img = `http://img.youtube.com/vi/${fromData.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save();
        res.send('Course Save')
            .then(() => res.redirect('/'))
            .catch(error => {
                
            });
    }
    //GET /courses/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next)
    }

    //PUT /courses/:id/update
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //Delete /courses/:id
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('back'))
        .catch(next);
    }
}

module.exports = new CourseController();
