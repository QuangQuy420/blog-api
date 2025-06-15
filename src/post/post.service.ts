import { Inject, Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostsService {
    constructor(
        @Inject('POST_REPOSITORY')
        private readonly postRepository: PostRepository
    ) {}

    findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post | null> {
    return this.postRepository.findOne({ where: { id } });
  }

  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  async update(id: number, updatePostDto: Partial<CreatePostDto>): Promise<Post | null> {
    await this.postRepository.update(id, updatePostDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
