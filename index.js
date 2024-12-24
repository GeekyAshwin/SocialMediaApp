import express from "express";  // Correctly import express as the default export
import authRoutes from "./Routes/auth-routes.js";

const app = express();  // Initialize the app using express

app.use(express.json()); // parse body req.body will not be empty now
app.use(authRoutes);  // Use the authRoutes for authentication-related endpoints

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
