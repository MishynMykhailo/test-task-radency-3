import { IsString, IsBoolean, IsOptional, IsEnum } from 'class-validator';

// DTO - data transfer object

enum NoteCategory {
  Task = 'Task',
  Idea = 'Idea',
  RandomThought = 'RandomThought',
}

export class CreateNoteDTO {
  @IsString()
  name: string;

  @IsString()
  @IsEnum(NoteCategory, { message: 'invalid category' })
  category: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsBoolean()
  archive: boolean;

  date: Array<string>;
}
