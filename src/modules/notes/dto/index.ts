import {
  IsString,
  IsBoolean,
  IsOptional,
  IsEnum,
  IsArray,
  IsInt,
} from 'class-validator';

// DTO - data transfer object

enum NoteCategory {
  Task = 'Task',
  Idea = 'Idea',
  RandomThought = 'Random Thought',
}

export class CreateNoteDTO {
  @IsString()
  name: string;

  @IsString()
  @IsEnum(NoteCategory)
  category: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsBoolean()
  archive: boolean;

  @IsOptional()
  @IsArray()
  date: Array<string>;
}

export class UpdateNoteDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsEnum(NoteCategory, { message: 'invalid category' })
  category: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsBoolean()
  archive: boolean;

  @IsOptional()
  @IsArray()
  date: Array<string>;
}

export class getStatsDTO {
  @IsString()
  name: string;

  @IsInt()
  active: number;

  @IsInt()
  archive: number;
}
