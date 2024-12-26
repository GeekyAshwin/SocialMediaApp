import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";

const AuthMiddleware = (req, res, next) => {

    try {
        const token = req.headers.authorization.trim().replace("Bearer ", "") ;
        if (!token) {
            return res.status(401).json({
                status: 401,
                message: 'Invalid Authorization Token'
            });
        }
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.session.user = user;
        next();

    } catch (error) {
        console.error(error);
        res.status(401).json({
            status: 401,
            message: 'Invalid Authorization Token1'
        });
    }

}

export default AuthMiddleware;