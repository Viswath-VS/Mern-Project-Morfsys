import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwtKey = process.env.JWT_KEY;
const authMiddleware = (req,res,next) => {
    const token = req.header('x-auth-token');
    if(!token) return res.status(404).send('json web token not found. try again');

    try {
        const decoded = jwt.verify(token,jwtKey);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("invalid token");
    }
}

export default authMiddleware;