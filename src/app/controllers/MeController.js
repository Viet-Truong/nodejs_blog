const Course = require('../models/Course');

class MeController {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({}).lean();
        if (req.query.hasOwnProperty('_sort')) {
            const isValidType = ['asc', 'desc'].includes(req.query.type);
            courseQuery = courseQuery.sort({
                [req.query.column]: isValidType ? req.query.type : 'desc',
            });
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()]).then(
            ([courses, deleted]) => {
                res.render('me/stored_courses', { courses, deleted });
            }
        );
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
