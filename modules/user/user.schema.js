import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string()
    .required()
    .max(50)
    .message('O campo "nome" pode ter no máximo {{#limit}} caracteres.'),
  user: Joi.string()
    .required()
    .max(20)
    .message('O campo "usuário" pode ter no máximo {{#limit}} caracteres.'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .max(100)
    .message('O campo "e-mail" pode ter no máximo {{#limit}} caracteres.'),
  password: Joi.string()
    .required()
    .max(30)
    .message('O campo "senha" pode ter no máximo {{#limit}} caracteres.')
    .min(6)
    .message('O campo "senha" deve ter no mínino {{#limit}} caracteres.'),
});

export const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string()
    .required()
    .max(30).message('O campo "senha" pode ter no máximo {{#limit}} caracteres.')
    .min(6).message('O campo "senha" deve ter no mínino {{#limit}} caracteres.'),
});
