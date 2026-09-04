import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js';
import { roleMiddleware } from '../middleware/role.middleware.js';
import { createClass, getClass } from '../controllers/class.controller.js';


const router = express.Router();


router.post("/create", authMiddleware, roleMiddleware("Admin"), createClass)
router.get("/get", authMiddleware, roleMiddleware("Admin"), getClass)




export default router;