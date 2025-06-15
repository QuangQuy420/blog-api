import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'NestJS is Awesome', description: 'Title of the post' })
  title: string;

  @ApiProperty({ example: 'NestJS is a progressive Node.js framework...', description: 'Content of the post' })
  content: string;

  @ApiProperty({ example: 'Alice', description: 'Author of the post' })
  author: string;
}