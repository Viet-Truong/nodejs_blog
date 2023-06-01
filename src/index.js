const path = require('path');
const express = require('express');
const morgan = require('morgan');
var handlebars = require('express-handlebars');

const app = express();
const port = 4000;

const route = require('./routes');

route(app);

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
// console.log(path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
