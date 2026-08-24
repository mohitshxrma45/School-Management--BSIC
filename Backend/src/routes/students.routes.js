import express from 'express'
import { validate } from '../middleware/validate.middleware.js';
import { createStudentSchema } from '../validation/student.validation.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { roleMiddleware } from '../middleware/role.middleware.js';
import {
    createStudent,
    getAllStudent,
    getStudentById,
    deleteStudent,
    updateStudent,
    changeStatus
} from '../controllers/student.controller.js';




const router = express.Router();


//create the students data by teacher and admin
router.post("/create",
    authMiddleware,
    roleMiddleware("Admin", "Teacher"),
    validate(createStudentSchema),
    createStudent);

//get all students data
router.get("/get-all",
    authMiddleware,
    roleMiddleware("Admin", "Teacher"),
    validate(createStudentSchema),
    getAllStudent);

//get the student data by id
router.get("/get/:id",
    authMiddleware,
    roleMiddleware("Admin", "Teacher", "Student"),
    validate(createStudentSchema),
    getStudentById);

//update the data of student
router.patch("/get/:id",
    authMiddleware,
    roleMiddleware("Admin", "Teacher"),
    validate(createStudentSchema),
    updateStudent);

//delete student data
router.delete("/get/:id",
    authMiddleware,
    roleMiddleware("Admin"),
    validate(createStudentSchema),
    deleteStudent);

//Change the Status of students active or not active
router.patch("/get/:id/status",
    authMiddleware,
    roleMiddleware("Admin"),
    validate(createStudentSchema),
    changeStatus);





export default router;