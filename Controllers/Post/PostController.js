import express from "express";
import PostService from "../../Services/Post/PostService.js";
import Post from "../../Models/Post.js";
import UserUtility from "../../Utils/UserUtility.js";

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
    async getAllPostOfUser(req, res) {
        try {
            const loggedInUser = await UserUtility.getLoggedInUser(req);
            let posts = await Post.find({
                createdBy: loggedInUser._id
            });
            res.status(200).json({
                data: posts,
                status: true
            });

        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Something went wrong'
            });
        }

    },

    /**
     * Method to delete the post
     */
    async deletePost() {

    }
}

export default PostController;