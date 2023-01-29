import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/visitors.js';
const router = express.Router();
// start adding our routes
router.get('/', getPosts);
router.post('/', createPost);
//patch is for updating route
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
export default router;