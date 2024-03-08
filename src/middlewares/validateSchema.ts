import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Joi from "joi";

export function validateSchema(schema: Joi.ObjectSchema) {
    
    return (req: Request, res: Response, next: NextFunction) => {
        const { body } = req;
        const { error } = schema.validate(body, { abortEarly: false });

        if(error) {
            const errorMessages = error.details.map(detail => detail.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessages);
        }

        next()
    }
}