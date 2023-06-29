const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// PATH "/" always last line
router.get('/:slug', courseController.show);

module.exports = router;
