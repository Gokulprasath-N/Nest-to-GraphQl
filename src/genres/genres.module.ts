import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresResolver } from './genres.resolver';

@Module({
  // Resolvers are registered as providers, not controllers
  providers: [GenresResolver, GenresService],
})
export class GenresModule {}