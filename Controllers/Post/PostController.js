import express from "express";
import PostService from "../../Services/Post/PostService.js";

const PostController = {
    /**
     * Method to create post
     */
    async createPost(req, res) {
        try {
            const data = await PostService.createPost(req, res);
            return res.status(200).json(data);
        } catch (error) {
            console.error(error)
            res.status(201).json({
                message: 'Something went wrong'
            });
        }
    },

     /**
     * Method to create post
     */
     async updatePost() {

     },

    /**
     * Method to list all post of user
     */
    async getAllPostOfUser() {

    },

    /**
     * Method to delete the post
     */
    async deletePost() {

    }
}

export default PostController;