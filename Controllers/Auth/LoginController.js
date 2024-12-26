import express from "express";
import AuthService from "../../Services/Auth/AuthService.js";
import EmailService from "../../Services/Emails/EmailService.js";
import User from "../../Models/User.js";
import UserUtility from "../../Utils/UserUtility.js";

const LoginController = {

    async login(req, res) {
        try {
            const data = await AuthService.login(req);
            res.status(data.status ? 200 : 500).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    },

    async sendForgotPasswordMail(req, res) {
        try {
            const data = await EmailService.sendForgotPasswordEmail(req);
            res.status(data?.status ? 200 : 500).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error sending email' });
        }
    },

    async resetPassword(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserUtility.getUserByEmail(email);

            if (!user) return res.status(422).json({ message: 'User not found' });

            if (!user.passwordResetToken) {
                return res.status(200).json({ message: 'Password reset link expired' });
            }

            const encryptedPassword = await UserUtility.encryptString(password);
            await user.updateOne({ password: encryptedPassword, passwordResetToken: null });

            res.status(200).json({ message: 'Password reset successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
};

export default LoginController;
