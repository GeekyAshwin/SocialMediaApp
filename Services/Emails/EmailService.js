import sgMail from "@sendgrid/mail";

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
            const message = {
                to: email,
                from: fromEmail,
                subject: 'Forgot Password Link Received',
                text: 'You have request a forgot password link. Please click the link and reset the password.',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };
            const mailSent = await sgMail.send(message);
            let response = {};
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
                status: true,
                message: 'Something went wrong'
            });
        }
       
          
    }

}

export default EmailService;