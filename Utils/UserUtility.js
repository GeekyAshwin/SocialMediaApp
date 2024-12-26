import bcrypt from "bcryptjs";
import User from "../Models/User.js";

const UserUtility = {

    /**
     * Method to encrypt user password
     */
    encryptString (password) {
        return bcrypt.hash(password, 10)  // 10 is the salt;
    },

    /**
     * Method to check if password is correct
     */
    isPasswordCorrect(givenPassword, actualPassword) {
        console.log(givenPassword, actualPassword)
        return bcrypt.compare(givenPassword, actualPassword)
    },

    /**
     * Method to get user by email
     */
    async getUserByEmail(email) {
        return await User.findOne({
            email: email
        });
    },

    /**
     * Method to get user by email
     */
    async getLoggedInUser(req) {
        return req.session.user.user;
    }
}

export default UserUtility;