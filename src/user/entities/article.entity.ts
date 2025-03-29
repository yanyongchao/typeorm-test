import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { Tag } from './tag.entity';
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    comment: '文章标题',
  })
  title: string;

  @Column({
    type: 'text',
    comment: '文章内容',
  })
  content: string;

  @ManyToMany(() => Tag, (tag) => tag.articles, { cascade: true })
  @JoinTable() // 只在一方使用 JoinTable
  tags: Tag[];
}
