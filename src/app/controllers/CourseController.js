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

    // [POST] /courses/store
    store(req, res, next) {
        if (req.body.image === '') {
            req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/hqdefault.jpg`;
        }
        const course = new Course(req.body);
        course.save().then(() => res.redirect(`/`));
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => {
                res.render('courses/update', { course });
            })
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .lean()
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }

    // [DELETE] /courses/:id/force
    force(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/trash/courses');
            })
            .catch(next);
    }

    // [PATCH] /courses/:id/restore

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/trash/courses');
            })
            .catch(next);
    }
}

module.exports = new CourseController();
