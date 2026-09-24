import express from 'express'
import { createSection ,getSection} from '../controllers/section.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { roleMiddleware } from '../middleware/role.middleware.js';


const router = express.Router();

router.post("/create", authMiddleware, roleMiddleware("Admin"), createSection)
router.get("/get", authMiddleware, roleMiddleware("Admin"), getSection)





export default router