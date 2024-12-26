import express from "express";
import Post from "../../Models/Post.js";
import connection from "../../DB/Connections.js";

const PostService = {

    /**
     * Method to get all the posts of user
     */
    async createPost(req, res) {
        try {
            const postData = {
                content: req.body.content,
                image: req.body.image,
            }
            
            const post = await Post.create(postData);
            
                res.status(201).json({
                    status: true,
                    message: 'Post created successfully'
                });
             
        } catch (error) {
            console.error(error)
            res.status(500).json({
                status: true,
                message: 'Somethine went wrong'
            });

        }
    }
}

export default PostService;