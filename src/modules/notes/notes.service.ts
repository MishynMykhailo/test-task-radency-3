import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from 'src/models/note.model';
import { CreateNoteDTO, UpdateNoteDTO, getStatsDTO } from './dto';
import { AppError } from 'src/common/errors';
import { validate } from 'class-validator';

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

  getNotes(): Promise<Note[]> {
    return this.noteRepository.findAll();
  }

  async findNoteById(id: string) {
    const result = await this.noteRepository.findByPk(id);
    if (!result) {
      throw new BadRequestException(AppError.NOTE_ID_NOT_EXIST);
    }
    return result;
  }

  async updateById(id: string, dto: UpdateNoteDTO) {
    if (!dto || Object.keys(dto).length === 0) {
      throw new BadRequestException('Empty fields');
    }
    const existingNote = await this.findNoteById(id);
    if (!existingNote) {
      throw new BadRequestException(AppError.NOTE_ID_NOT_EXIST);
    }
    const validationErrors = await validate(dto);
    if (validationErrors.length > 0) {
      throw new BadRequestException(validationErrors);
    }

    await this.noteRepository.update(dto, { where: { id: existingNote.id } });
    const updatedNote = await this.noteRepository.findByPk(existingNote.id);
    return updatedNote;
  }

  async deleteById(id: string) {
    const existingNote = await this.findNoteById(id);
    if (!existingNote) {
      throw new BadRequestException(AppError.NOTE_ID_NOT_EXIST);
    }
    await this.noteRepository.destroy({ where: { id: id } });
    return { message: `Note with ID '${id}' deleted` };
  }

  async getStats() {
    const result = await this.getNotes();
    return result.reduce<getStatsDTO[]>((acc, note) => {
      const category = acc.find((item) => item.name === note.category);

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
  }
}
