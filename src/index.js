const path = require('path');
const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');
var handlebars = require('express-handlebars');
const hbs = require('handlebars');

const app = express();
const port = 4000;

const route = require('./routes');
const db = require('./config/db');

hbs.registerHelper('sum', function (a, b) {
    return parseInt(a) + parseInt(b);
});
// Override method
app.use(methodOverride('_method'));
// HTTP
app.use(morgan('combined'));
// Using static file
app.use(express.static(path.join(__dirname, 'public')));
// Using middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// connect db
db.connect();

route(app);
// console.log(path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
