const { json } = require("express/lib/response");
const res = require("express/lib/response");
const Course = require('../models/Course');

class CoursesController {
    index(req, res, next) {
         Course.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject())
                res.render('home', {courses: courses});
            })
            .catch( error => next(error));
    }

    show(req, res, next) {
        Course.find({slug:'php'})
        .then(course => {
            course = course.map(course => course.toObject())
            res.json(course);
        })
        .catch(next);
        //res.send('asdf-'+req.params.slug);
    }
}

module.exports = new CoursesController;
