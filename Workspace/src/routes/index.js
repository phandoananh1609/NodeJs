const sitesRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {

    app.use('/courses', coursesRouter);
    app.use('/', sitesRouter);

}

module.exports = route;
