import { randomBytes } from "crypto";
import 'dotenv/config'
import User from "../Models/User.js";

const AppUtility = {
    /**
     * Genereate forgot password link
     */
    async generateForgotPasswordLink (email) {
        const token = randomBytes(32).toString('hex');
        const link = process.env.FRONT_END_APP_URL + '?email=' + email + '&token=' +token;
        const user = await User.findOne({
            email: email
        });
        await user.updateOne({
            passwordResetToken: token 
        });
        return link;
    }
}
export default AppUtility;