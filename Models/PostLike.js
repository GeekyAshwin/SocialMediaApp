import mongoose from "mongoose";

const postLikeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
}, {
    timestamps: true
});

const PostLike = mongoose.model('PostLike', postLikeSchema);
export default PostLike;