import joi from "joi";

export const userSchema = joi.object({
    nickName: joi.string().min(4).required(),
    password: joi.string().min(4).required(),
    email: joi.string().email().required(),
})