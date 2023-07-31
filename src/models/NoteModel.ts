import Joi from "joi";
import { INote, IValidParam } from "../interfaces/interfaces";

const todoAddSchema: Joi.ObjectSchema<INote> = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  content: Joi.string(),
  date: Joi.array().items(Joi.string()),
});

const idSchema: Joi.ObjectSchema<IValidParam> = Joi.object({
  id: Joi.string().required(),
});

const schemas = {
  todoAddSchema,
  idSchema,
};

export default schemas;
