import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDTO, UpdateNoteDTO } from './dto';

@Controller('api')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}
  // Get All Notes
  @Get('notes')
  getNotes() {
    return this.noteService.getNotes();
  }

  // Get one by id
  @Get('notes/:id')
  findNoteById(@Param('id') id: string) {
    return this.noteService.findNoteById(id);
  }

  // Create new Note
  @Post('notes')
  createNotes(@Body() dto: CreateNoteDTO) {
    return this.noteService.createNote(dto);
  }

  // Delete one by Id
  @Delete('notes/:id')
  deleteById(@Param('id') id: string) {
    return this.noteService.deleteById(id);
  }

  // Update one by Id
  @Patch('notes/:id')
  updateById(@Param('id') id: string, @Body() dto: UpdateNoteDTO) {
    return this.noteService.updateById(id, dto);
  }

  // Get stats
  @Get('stats')
  getState() {
    return this.noteService.getStats();
  }
}
