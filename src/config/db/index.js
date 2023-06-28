const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose
            .connect('mongodb://127.0.0.1:27017/F8_Education_dev')
            .then(() => console.log('Connected!'));
    } catch (e) {
        console.log(e);
    }
}
module.exports = { connect };
