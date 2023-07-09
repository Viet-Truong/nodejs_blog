const Course = require('../models/Course');

class MeController {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({}).lean();

        Promise.all([courseQuery, Course.countDocumentsDeleted()]).then(
            ([courses, deleted]) => {
                res.render('me/stored_courses', { courses, deleted });
            }
        );
        // Course.find({})
        //     .lean()
        //     .then((courses) => {
        //         res.render('me/stored_courses', { courses });
        //     })
        //     .catch(next);

        // Course.countDocumentsDeleted()
        //     .lean()
        //     .then((deletedCounts) => {
        //         console.log(deletedCounts);
        //     })
        //     .catch(next);
    }

    // [GET] /trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .lean()
            .then((courses) => {
                res.render('me/trash_courses', { courses });
            })
            .catch(next);
    }
}

module.exports = new MeController();
