import mongoose from "mongoose";

const friendRequestSchema = new mongoose.Schema({
    sentTo: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    isAccepted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    collection: 'friendRequests'
});

const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);
export default FriendRequest;