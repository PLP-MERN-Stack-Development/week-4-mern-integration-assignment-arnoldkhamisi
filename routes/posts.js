const express = require('express');
const { body, param } = require('express-validator');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post(
  '/',
  body('title').notEmpty(),
  body('content').notEmpty(),
  body('author').notEmpty(),
  postController.createPost
);
router.put(
  '/:id',
  param('id').isMongoId(),
  body('title').notEmpty(),
  body('content').notEmpty(),
  postController.updatePost
);
router.delete('/:id', param('id').isMongoId(), postController.deletePost);

module.exports = router;