import connection from "../../DB/Connections.js";

const AuthService = {

     /**
     * Method to register user
     */
    async register(req, res) {

        const userData = {
             email: req.body.email,
             password: req.body.password,
             username: req.body.username,
             name: req.body.name
        }

        const db = await connection.connectDB();
        const userCollection = db.collection('users');
        const result = await userCollection.insertOne(userData);
        const createdUser = await userCollection.findOne({ _id: result.insertedId });

        if (result) {
            return {
                status: true,
                data: createdUser,
                message: 'User Registered Successfully'
            };           
        } else {
            return {
                status: false,
                data: result,
                message: 'Something went wrong'
            };
        }        
        
    },

    /**
     * Method to login user
     */
    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;
    }
}

export default AuthService;
