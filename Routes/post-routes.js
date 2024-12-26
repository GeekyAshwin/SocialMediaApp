import express from "express";
import PostController from "../Controllers/Post/PostController.js";
import AuthMiddleware from "../Middlewares/AuthMiddleware.js";

const postRoutes = express.Router();

postRoutes.post('/api/post/create', AuthMiddleware, PostController.createPost);

export default postRoutes;