import Joi from "joi";

export const createStudentSchema = Joi.object({
    user: Joi.string()
        .required(),

    studentId: Joi.string()
        .trim()
        .required(),

    class: Joi.string()
        .trim()
        .required(),

    section: Joi.string()
        .trim()
        .required(),

    rollNumber: Joi.number()
        .required(),

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