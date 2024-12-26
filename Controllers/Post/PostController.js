import express from "express";
import PostService from "../../Services/Post/PostService.js";
import Post from "../../Models/Post.js";
import UserUtility from "../../Utils/UserUtility.js";
import responses from "../../Utils/ResponseUtility.js";

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
            responses.sendServerErrorResponse();
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
            responses.sendServerErrorResponse();

        }

    },

    /**
     * Method to delete the post
     */
    async deletePost(req, res) {
        try {
            const postId = req.params.id;
            let post = await Post.deleteOne({
                _id: postId
            });
            if (post.deletedCount === 0) {
                return responses.sendUnprocessableDataResponse(res, 'Post already deleted');
            }
            return responses.sendSuccessResponse(res, 'Post deleted');

        } catch (error) {
            console.error(error)
            responses.sendServerErrorResponse();
        }

    }
}

export default PostController;