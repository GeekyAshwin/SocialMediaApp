import express from "express";
import AuthService from "../../Services/Auth/AuthService.js";

const LoginController = {

    /**
     * Method to login user
     */
    async login(req, res) {
        try {
            const data = await AuthService.login(req);

            if (data.status) {
                res.status(200).json(data);
            } else {
                res.status(500).json(data);
            }

        } catch (error) {
            console.error(error);
            res.status(500).json(data);

        }
    }

}

export default LoginController;