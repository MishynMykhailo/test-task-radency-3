import express from "express";
import NotesRepository from "../../repositories/notes/NotesRepository";

class NotesControllers {
  createNotes(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.createNote(req.body));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }
  getAllNotes(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.getAllNotes());
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }
  getById(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.getById(req.params.id));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }
  updateById(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.updateById(req.body, req.params.id));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }
  deleteById(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.deleteById(req.params.id));
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }
  getStats(req: express.Request, res: express.Response) {
    try {
      return res.json(NotesRepository.getStats());
    } catch (error: unknown) {
      const { message } = error as Error;
      return res.status(404).json({ message });
    }
  }
}

export default new NotesControllers();
