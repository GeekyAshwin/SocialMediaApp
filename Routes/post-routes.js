import express from "express";
import PostController from "../Controllers/Post/PostController.js";

const postRoutes = express.Router();

postRoutes.post('/api/post/create', PostController.createPost);

export default postRoutes;