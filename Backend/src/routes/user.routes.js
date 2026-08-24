import express from 'express'
import { login, logout, register, getMe, changePassword } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import { changePasswordSchema, loginSchema, registerSchema } from '../validation/user.validation.js';


const router = express.Router();


router.post("/register", validate(registerSchema), register)
router.post("/login", validate(loginSchema), login)
router.post("/logout", logout)


router.get("/me", authMiddleware, getMe)
router.post("/change-password",authMiddleware, validate(changePasswordSchema), changePassword)



export default router;