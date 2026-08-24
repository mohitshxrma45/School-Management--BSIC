import Joi from "joi";

export const registerSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(3)
        .max(50)
        .required(),

    email: Joi.string()
        .trim()
        .email()
        .required(),

    password: Joi.string()
        .min(8)
        .max(30)
        .required()
});

export const loginSchema = Joi.object({
    email: Joi.string()
        .trim()
        .email()
        .required(),

    password: Joi.string()
        .required()
});

export const changePasswordSchema = Joi.object({
    oldPassword: Joi.string()
        .required(),

    newPassword: Joi.string()
        .min(8)
        .max(30)
        .required()
});