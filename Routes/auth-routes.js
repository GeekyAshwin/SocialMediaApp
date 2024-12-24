import express from "express";
import RegisterController from "../Controllers/Auth/RegisterController.js";
const authRoutes = express.Router();

authRoutes.post('/api/register', RegisterController.register);


export default authRoutes;
