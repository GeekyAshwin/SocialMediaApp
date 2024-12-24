import AuthService from "../../Services/Auth/AuthService.js";

const RegisterController = {

    /**
     * Method to register user
     */
    async register(req, res) {
        try {
            // run validations
            const result = await AuthService.register(req, res);

            if (result?.status) {
                res.status(201).json(result);                
            } else {
                res.status(500).json(result);                
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Internal Server Error'                
            });
        }


    },
}

export default RegisterController;