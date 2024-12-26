import express from 'express';
import AuthMiddleware from '../Middlewares/AuthMiddleware.js';
import CommentController from '../Controllers/Post/CommentController.js';

const commentRoutes = express.Router();

commentRoutes.post('/api/post/:id/comment', AuthMiddleware, CommentController.addComment);
export default commentRoutes;