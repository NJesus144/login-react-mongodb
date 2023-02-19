import Joi from "joi";
import createHandler from "../../../lib/middlewares/nextConnect";

import validate from "../../../lib/middlewares/validation";
import { signupUser } from "../../../modules/user/user.service";

const postSchema = Joi.object({
  name: Joi.string().required().max(50),
  user: Joi.string().required().max(20),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(30).min(6),
});

const signup = createHandler();

signup.post(validate({ body: postSchema }), (req, res) => {
  signupUser(req.body);
  res.status(200).json({ teste: "ok" });
});

export default signup;
