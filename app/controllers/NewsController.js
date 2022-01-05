const res = require("express/lib/response");
const Course = require('../models/Course');

class NewsController {
    index(req, res, next) {
         Course.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject())
                res.render('home', {courses: courses});
            })
            .catch( error => next(error));
    }

    show(req, res) {
        res.send('show news function');
    }
}

module.exports = new NewsController;
