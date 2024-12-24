import express from "express";
import RegisterController from "../Controllers/Auth/RegisterController.js";
import LoginController from "../Controllers/Auth/LoginController.js";
const authRoutes = express.Router();

authRoutes.post('/api/register', RegisterController.register);
authRoutes.post('/api/login', LoginController.login);



export default authRoutes;
