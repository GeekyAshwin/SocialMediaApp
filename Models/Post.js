import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        nullable: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    likeCount: {
        type: Number,
        default: 0,
        nullable: true,
    },
    commentCount: {
        type: Number,
        default: 0,
        nullable: true,
    },
    shareCount: {
        type: Number,
        default: 0,
        nullable: true,
    },
});

const Post = mongoose.model('Post', postSchema);
export default Post;