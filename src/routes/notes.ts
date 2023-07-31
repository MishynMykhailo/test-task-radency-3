import express from "express";
import schemas from "../models/NoteModel";
import { validateBody, validateParams } from "../middlewares/validation";
import NotesControllers from "../services/notes/NotesControllers";
const router: express.Router = express.Router();

// Route - create new Notes
router.post(
  "/notes",
  validateBody(schemas.todoAddSchema),
  NotesControllers.createNotes
);
// Delete - delete note by id
router.delete(
  "/notes/:id",
  validateParams(schemas.idSchema),
  NotesControllers.deleteById
);
// Update - update note by id
router.patch("/notes/:id", NotesControllers.updateById);
// All - get all notes
router.get("/notes", NotesControllers.getAllNotes);
// Get One - get one note by id
router.get(
  "/notes/:id",
  validateParams(schemas.idSchema),
  NotesControllers.getById
);
// Get Stats - get stats
router.get("/stats", NotesControllers.getStats);

export default router;
