import express from "express";
import PostService from "../../Services/Post/PostService.js";
import Post from "../../Models/Post.js";
import UserUtility from "../../Utils/UserUtility.js";
import responses from "../../Utils/ResponseUtility.js";
import PostLike from "../../Models/PostLike.js";

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

    },


    /**
     * Method to like , unlike the post
     */
    async likePost (req, res) {
        try {
            const user = await UserUtility.getLoggedInUser(req);
            const postId = req.params.id;

            let postLiked = await PostLike.find({
                postId: postId,
                userId: user._id,
            });
            let post = await PostService.getPostById(postId);
            let likeCount = post?.likeCount;
            if (postLiked.length) {
                await post.updateOne({
                    likeCount : --likeCount
                });
                await PostLike.find({
                    postId: postId,
                    userId: user._id,
                }).deleteOne();
                return responses.sendSuccessResponse(res, 'Post Unliked')
            }

            postLiked = await PostLike.create({
                postId: postId,
                userId: user._id,
            });
            await post.updateOne({
                likeCount : ++likeCount
            });

            if (postLiked) {
                return responses.sendSuccessResponse(res, 'Post liked')
            }

        } catch (error) {
            console.error(error)
            return responses.sendServerErrorResponse(res);
        }

    }
}

export default PostController;