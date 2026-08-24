import express from 'express'
import { login, logout, register, getMe, changePassword } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';


const router = express.Router();


router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)


router.get("/me", authMiddleware, getMe)
router.post("/change-password", authMiddleware, changePassword)



export default router;