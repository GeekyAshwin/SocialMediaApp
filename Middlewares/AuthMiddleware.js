import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";

const AuthMiddleware = (req, res, next) => {

    try {
        const token = req.headers.authorization ;
        if (!token) {
            return res.status(401).json({
                status: 401,
                message: 'Missing Authorization Token'
            });
        }
        const user = jwt.verify(token.trim().replace("Bearer ", ""), process.env.JWT_SECRET_KEY);
        req.session.user = user;
        next();

    } catch (error) {
        console.error(error);
        res.status(401).json({
            status: 401,
            message: 'Invalid Authorization Token'
        });
    }

}

export default AuthMiddleware;