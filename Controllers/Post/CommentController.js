import Comment from "../../Models/Comment.js";
import responses from "../../Utils/ResponseUtility.js";
import UserUtility from "../../Utils/UserUtility.js";

const CommentController = {

    /**
     * Method to add comment to post
     */
    async addComment(req, res) {
        try {
            const postId = req.params.id;
            const user = await UserUtility.getLoggedInUser(req);
            const comment = req.body.comment;

            let commentAdded = await Comment.create({
                postId: postId,
                userId: user._id,
                comment: comment,
            });
            if (commentAdded) {
                return responses.sendSuccessResponse(res, 'Comment added');
            } else {
                return responses.sendUnprocessableDataResponse(res, 'Unable to add comment');
            }
        } catch (error) {
            console.error(error);
            return responses.sendServerErrorResponse(res);
        }

    }
}

export default CommentController;