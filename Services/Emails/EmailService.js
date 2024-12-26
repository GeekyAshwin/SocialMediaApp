import sgMail from "@sendgrid/mail";
import AppUtility from "../../Utils/AppUtility.js";
import User from "../../Models/User.js";
// Set the api key for sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const fromEmail = process.env.FROM_EMAIL_ADDRESS;
const EmailService = {

    /**
     * Method to send forgot password email
     */
    async sendForgotPasswordEmail(req, res) {
        try {
            const email = req.body.email;
            const user = await User.findOne({
                email: email
            });
            let response = {};

            if (!user) {
                response = {
                    status: false,
                    message: 'Email address not found'
                }
                return response;
            }
            const forgotPasswordLink = await AppUtility.generateForgotPasswordLink(email);
            const message = {
                to: email,
                from: fromEmail,
                subject: 'Forgot Password Link Received',
                html: 'You have request a forgot password link. Please click the link and reset the password. <strong>and easy to do anywhere, even with Node.js</strong>' + forgotPasswordLink,
                // templateId: '22825985a2264dceae87659d1bbeaa0a',
                // dynamicData: {
                //     username: 'Ashwini',
                //     forgotPasswordLink: 'testlink'
                // }
            };
            const mailSent = await sgMail.send(message);
            if (mailSent) {
                response = {
                    status: true,
                    message: 'Forgot Password mail sent successfully'
                }
            } else {
                response = {
                    status: false,
                    message: 'Unable to sent forgot passsord link'
                }
            }
            return response;
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                message: 'Something went wrong'
            });
        }
       
          
    }

}

export default EmailService;