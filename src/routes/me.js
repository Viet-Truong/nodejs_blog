const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// PATH "/" always last line
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
