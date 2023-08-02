import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from 'src/models/note.model';
import { CreateNoteDTO } from './dto';
import { AppError } from 'src/common/errors';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note) private readonly noteRepository: typeof Note,
  ) {}
  async createNote(dto: CreateNoteDTO): Promise<CreateNoteDTO> {
    const newNote = {
      name: dto.name,
      category: dto.category,
      content: dto.content,
      date: dto.date,
      archive: dto.archive,
    };
    await this.noteRepository.create(newNote);
    return dto;
  }

  getNotes() {
    return;
  }
  async findNoteById(id: string) {
    const result = await this.noteRepository.findOne({ where: { id: id } });
    return result;
  }
  async deleteById(id: string) {
    const result = await this.findNoteById(id);
    if (result == null) {
      throw new BadRequestException(AppError.NOTE_ID_NOT_EXIST);
    } else {
      await this.noteRepository.destroy({ where: { id: id } });
      return { message: `User with '${id}' id deleted` };
    }
  }
}
