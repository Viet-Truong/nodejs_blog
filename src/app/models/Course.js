const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
    slug: { type: String, unique: true },
    videoID: { type: String, unique: true },
});

module.exports = mongoose.model('Course', Course);
