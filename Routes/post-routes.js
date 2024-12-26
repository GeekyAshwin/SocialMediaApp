import express from "express";
import PostController from "../Controllers/Post/PostController.js";
import AuthMiddleware from "../Middlewares/AuthMiddleware.js";

const postRoutes = express.Router();

postRoutes.post('/api/post/create', AuthMiddleware, PostController.createPost);
postRoutes.get('/api/post', AuthMiddleware, PostController.getAllPostOfUser);
postRoutes.delete('/api/post/:id', AuthMiddleware, PostController.deletePost);

// like, comment and share routes
postRoutes.put('/api/post/:id/like', AuthMiddleware, PostController.likePost);
postRoutes.post('/api/post/:id/comment', AuthMiddleware, PostController.deletePost);
// postRoutes.put('/api/post/:id/like', AuthMiddleware, PostController.deletePost);





export default postRoutes;