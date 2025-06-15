
import { DataSource } from 'typeorm';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Post).extend(PostRepository.prototype),
    inject: [DataSource],
  },
];
