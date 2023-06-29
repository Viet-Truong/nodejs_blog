const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/', siteRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
}

module.exports = route;
