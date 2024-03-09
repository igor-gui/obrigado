import Joi from "joi";


export const paymentSchema = Joi.object({
  receiverNick: Joi.string().optional(),
  receiverEmail: Joi.string().email().optional(),
  value: Joi.number().required(),
}).or("receiverNick", "receiverEmail").required();
