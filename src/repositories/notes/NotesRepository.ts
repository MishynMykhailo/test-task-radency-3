import * as uuid from "uuid";
import { InewNote, INote, IStatictics } from "../../interfaces/interfaces";
import { store } from "../../helpers/store";

class NotesRepository {
  // Create new notes
  createNote = (newNote: InewNote) => {
    const note: INote = {
      id: uuid.v4(),
      ...newNote,
      created: new Date().toLocaleString(),
      archive: false,
      date: [],
    };
    store.Notes = [...store.Notes, note];
    return note;
  };
  // Get all notes
  getAllNotes = () => {
    return store.Notes;
  };
  // Get one note by Id
  getById = (id: string) => {
    const result = store.Notes.find((item) => item.id === id);
    if (!result) {
      throw new Error("This id was not found, try again later!1");
    }
    return result;
  };
  // Update one note by id
  updateById = (newNote: InewNote, id: string) => {
    const result = store.Notes.find((item) => item.id === id);
    if (result) {
      result.name = newNote.name || result.name;
      result.category = newNote.category || result.category;
      result.content = newNote.content || result.content;
      result.date = newNote.date || result.date;
    } else {
      throw new Error("This id was not found, try again later!");
    }
  };
  // Delete one note by id
  deleteById = (id: string) => {
    const result = store.Notes.find((item) => item.id === id);
    if (!result) {
      throw new Error("This id was not found, try again later!");
    }
    store.Notes = store.Notes.filter((item) => item.id !== id);
    return { message: "Contact deleted", result };
  };
  // Get all Stats
  getStats = () => {
    return store.Notes.reduce<IStatictics[]>((acc, note) => {
      const category = acc.find((cat) => cat.name === note.category);

      if (!category) {
        return [
          ...acc,
          {
            name: note.category,
            active: note.archive ? 0 : 1,
            archive: note.archive ? 1 : 0,
          },
        ];
      }

      note.archive ? category.archive++ : category.active++;
      return acc;
    }, []);
  };

}
export default new NotesRepository();
