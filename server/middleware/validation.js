import Joi from "joi";

// validate function to check user signin credentials.
const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(20).required(),
    email: Joi.string().min(12).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
};

// validate function to check user login credentials.
const validateAuth = (auth) => {
  const schema = Joi.object({
    email: Joi.string().min(12).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(auth);
};

export { validateAuth, validateUser };
