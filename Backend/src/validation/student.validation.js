import Joi from "joi";

export const createStudentSchema = Joi.object({
    name: Joi.string()
        .trim()
        
    ,
    studentId: Joi.string()
        .trim()
        ,

    studentClass: Joi.string()
        .trim()
        ,

    section: Joi.string()
        .trim()
        ,

    rollNumber: Joi.number()
        ,

    dateOfBirth: Joi.date(),

    gender: Joi.string()
        .valid("male", "female", "other"),

    phone: Joi.string()
        .trim(),

    address: Joi.string()
        .trim(),

    guardianName: Joi.string()
        .trim(),

    admissionDate: Joi.date()
});