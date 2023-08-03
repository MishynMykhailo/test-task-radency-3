import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from '../notes/notes.module';
// Тут нужно добавить ConfigModule, ConfigService в imports, чтобы было видно в main.ts
import { ConfigModule, ConfigService } from '@nestjs/config';
// Для подключения к базе данных
import { SequelizeModule } from '@nestjs/sequelize';
// Данные полученные из env файла
import configurations from '../../configuration/index';
import { Note } from 'src/models/note.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations], // Какие настройки разрешить использовать ( В моём случае - env)
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres', // Какую базу подключили
        synchronize: true,
        autoLoadModels: true,
        models: [Note], //Модель которую добавляем
        ...configService.get('database'), // Данные для подключения к BD
      }),
    }),
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
