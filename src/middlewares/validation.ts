import express from "express";
import { ObjectSchema } from "joi";
import { INote, IValidParam } from "../interfaces/interfaces";

export function validateBody(schema: ObjectSchema<INote>) {
  return function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
}
export function validateParams(schema: ObjectSchema<IValidParam>) {
  return function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { error } = schema.validate(req.params);
    if (error) {
      return res.status(400).json({ error });
    }
    next();
  };
}
export default { validateBody, validateParams };
