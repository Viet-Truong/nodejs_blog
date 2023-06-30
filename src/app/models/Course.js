const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: String,
        slug: { type: String, slug: 'name', unique: true },
        videoID: { type: String, unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Course', Course);
