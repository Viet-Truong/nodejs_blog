const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// PATH "/" always last line
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-action', courseController.handleAction);
router.post('/trash/handle-action', courseController.handleTrashAction);
router.get('/:slug', courseController.show);
router.get('/:id/edit', courseController.edit);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.force);

module.exports = router;
