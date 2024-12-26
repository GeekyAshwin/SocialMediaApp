import express from "express";
import AuthMiddleware from "../Middlewares/AuthMiddleware.js";
import FriendRequestController from "../Controllers/FriendRequest/FriendRequestController.js";

const friendRequestRoutes = express.Router();

friendRequestRoutes.post('/api/user/:id/send-request', AuthMiddleware, FriendRequestController.sendFriendRequest);
friendRequestRoutes.post('/api/friend-request/:id/accept-request', AuthMiddleware, FriendRequestController.acceptFriendRequest);
friendRequestRoutes.get('/api/friend-requests', AuthMiddleware, FriendRequestController.getAllFriendRequests);

export default friendRequestRoutes;