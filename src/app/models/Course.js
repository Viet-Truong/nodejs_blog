const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
// const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: String,
        slug: { type: String, slug: 'name', unique: true },
        videoID: { type: String, unique: true },
    },
    {
        _id: false,
        timestamps: true,
    }
);

mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
