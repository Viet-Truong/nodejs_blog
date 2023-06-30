const Course = require('../models/Course');
class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render('courses/show', { course });
            })
            .catch(next);
    }
    // [GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // POST /courses/store

    store(req, res, next) {
        const formData = req.body;
        const course = new Course(formData);
        course.save().then(() => res.redirect(`/`));
    }
}

module.exports = new CourseController();
