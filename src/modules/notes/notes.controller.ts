import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDTO } from './dto';

@Controller('api')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get('notes')
  getNotes() {
    return this.noteService.getNotes();
  }

  @Post('notes')
  createNotes(@Body() dto: CreateNoteDTO) {
    return this.noteService.createNote(dto);
  }

  @Delete('notes/:id')
  deleteById(@Param('id') id: string) {
    return this.noteService.deleteById(id);
  }
}
