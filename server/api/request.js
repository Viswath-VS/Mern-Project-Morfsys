import express from "express";
import UsersDAO from "./user.ctrl.js"
import authMiddleware from "../middleware/authMiddleWare.js"



const router = express.Router();

// handling various api request from front-end
router.route("/register").post(UsersDAO.addUser);

router.route("/login").post(UsersDAO.loginUser);

router.route("/auth").post(authMiddleware,UsersDAO.authUser);

export default router;
