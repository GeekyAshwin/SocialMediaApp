import FriendRequest from "../../Models/FriendRequest.js";
import responses from "../../Utils/ResponseUtility.js";
import UserUtility from "../../Utils/UserUtility.js";

const FriendRequestController = {

    /**
     * Method to send friend request
     */
    async sendFriendRequest(req, res) {
        try {
            let loggedInUser = await UserUtility.getLoggedInUser(req);

            let friendRequestSent = await FriendRequest.create({
                sentBy: loggedInUser._id,
                sentTo: req.params.id,
            });
            if (friendRequestSent) {
                return responses.sendSuccessResponse(res, 'Friend Request Sent');
            }
        } catch (error) {
            console.error(error);
            return responses.sendServerErrorResponse(res);
        }

    },

    /**
     * Method to accept friend request
     */
    async acceptFriendRequest(req, res) {
        try {
            let friendRequest = await FriendRequest.find({
                _id: req.params.id,
            });
            if (friendRequest) {
                await FriendRequest.find({
                    _id: req.params.id,
                }).updateOne({
                    isAccepted: true,
                });
                return responses.sendSuccessResponse(res, 'Friend Request Accepted');
            }
        } catch (error) {
            console.error(error);
            return responses.sendServerErrorResponse(res);
        }
    },

     /**
     * Method to get all  friend request
     */
     async getAllFriendRequests(req, res) {
        try {
            let loggedInUser = await UserUtility.getLoggedInUser(req);

            let friendRequests = await FriendRequest.find({
                sentTo: loggedInUser._id,
                isAccepted: false,
            });

            if (friendRequests) {
                return responses.sendSuccessResponse(res, 'Friend Request fetched', friendRequests);
            }
        } catch (error) {
            console.error(error);
            return responses.sendServerErrorResponse(res);
        }

    },
}

export default FriendRequestController;