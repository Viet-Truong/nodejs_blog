const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({})
            .lean()
            .then((courses) => {
                return res.render('home', { courses });
            })
            .catch(() => {
                res.status(400).json({ message: 'ERROR' });
            });
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
