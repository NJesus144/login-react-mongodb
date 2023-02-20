import Joi from 'joi'

export const signupSchema = Joi.object({
  name: Joi.string().required().max(50),
  user: Joi.string().required().max(20),
  email: Joi.string().email({ tlds: { allow: false } }).required().max(100),
  password: Joi.string().required().max(30).min(6),
});
