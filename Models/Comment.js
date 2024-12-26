import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comment: {
        type: String,
        nullable: true,
    },
    imageUrl: {
        type: String,
        nullable: true,
        default: null,
    },
}, {
    timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;