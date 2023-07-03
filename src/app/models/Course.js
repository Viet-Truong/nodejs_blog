const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

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

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
