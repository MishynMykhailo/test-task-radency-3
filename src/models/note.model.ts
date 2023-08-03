import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export class Note extends Model {
  @Column
  name: string;

  @Column
  category: string;

  @Column
  content: string;

  @Column
  archive: boolean;

  @Column(DataType.ARRAY(DataType.STRING))
  date: Array<string>;
}
