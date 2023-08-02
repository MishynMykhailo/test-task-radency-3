import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('notes')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('notes/:id')
  // getById(@Param('id') id: string) {
  //   return id;
  // }

  // @Post('notes')
  // create(@Body() dto: { num: number }) {
  //   console.log('i work');
  //   return dto;
  // }
}
