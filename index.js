import express from "express";  // Correctly import express as the default export
import authRoutes from "./Routes/auth-routes.js";
import postRoutes from "./Routes/post-routes.js";
import commentRoutes from "./Routes/comment-routes.js";
import friendRequestRoutes from "./Routes/friend-requests-routes.js";
import connection from "./DB/Connections.js";
import session from "express-session";
const app = express();  // Initialize the app using express

connection.connectDB();

app.use(session({
    secret: process.env.JWT_SECRET_KEY,  // Change this to a secure secret key
    resave: false,  // Prevent saving session if it's not modified
    saveUninitialized: true,  // Save the session even if it's not initialized
    cookie: { secure: false }  // For development; set to true in production with HTTPS
}));

app.use(express.json()); // parse body req.body will not be empty now
app.use(authRoutes);  // Use the authRoutes for authentication-related endpoints
app.use(postRoutes);  // Use the authRoutes for authentication-related endpoints
app.use(commentRoutes);  // Use the authRoutes for authentication-related endpoints
app.use(friendRequestRoutes);  // Use the authRoutes for authentication-related endpoints

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
