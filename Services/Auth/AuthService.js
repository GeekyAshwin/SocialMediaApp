import connection from "../../DB/Connections.js";
import UserUtility from "../../Utils/UserUtility.js";
import jwt from "jsonwebtoken";
const AuthService = {

     /**
     * Method to register user
     */
    async register(req, res) {

        const userData = {
             email: req.body.email,
             password: await UserUtility.encryptString(req.body.password),
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
    async login(req, res) {

        const userData = {
             email: req.body.email,
             password: req.body.password,
        }

        const db = await connection.connectDB();
        const userCollection = db.collection('users');
        const user = await userCollection.findOne({ email: userData.email });

        if (!user) {
            return {
                status: false,
                data: [],
                message: 'User not found'
            }; 
        }
        const loggedIn = await UserUtility.isPasswordCorrect(userData.password, user.password);
        console.log(loggedIn)
        if (loggedIn) {
            var token = jwt.sign({ user: user }, user.email);
            const data = {
                user: user,
                token: token,
            }
            return {
                status: true,
                data: data,
                message: 'User loggedin Successfully'
            };   
        } else {
            return {
                status: false,
                message: 'Invalid credentials'
            };
        }
    },
}

export default AuthService;
