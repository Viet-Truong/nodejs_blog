const path = require('path');
const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');
var handlebars = require('express-handlebars');
const hbs = require('handlebars');

const sortMiddleWare = require('./app/middlewares/SortMiddleWare');

const app = express();
const port = 4000;

const route = require('./routes');
const db = require('./config/db');

// middleware
hbs.registerHelper('sum', function (a, b) {
    return parseInt(a) + parseInt(b);
});

hbs.registerHelper('sortable', function (field, sort) {
    const sortType = field === sort.column ? sort.type : 'default';

    const icons = {
        default: 'fa-solid fa-sort',
        asc: 'fa-solid fa-sort-down',
        desc: 'fa-solid fa-sort-up',
    };
    const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc',
    };

    const icon = icons[sortType];
    const type = types[sortType];
    const href = hbs.escapeExpression(`?_sort&column=${field}&type=${type}`);
    const output = `
        <a href="${href}">
            <i class="${icon}"></i>
        </a>
    `;
    return new hbs.SafeString(output);
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
// Custom middleware
app.use(sortMiddleWare);

// connect db
db.connect();

route(app);
// console.log(path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
