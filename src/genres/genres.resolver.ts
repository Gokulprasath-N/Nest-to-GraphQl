import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { Genre } from '../entities/genre.entity';
import { CreateGenreDto } from '../dto/create-genre.dto';
import { UpdateGenreDto } from '../dto/update-genre.dto';

@Resolver(() => Genre)
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  // Replaces @Get() - Queries fetch data
  @Query(() => [Genre], { name: 'genres' })
  findAll() {
    return this.genresService.findAll();
  }

  // Replaces @Get(':id')
  @Query(() => Genre, { name: 'genre' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.genresService.findOne(id);
  }

  // Replaces @Post() - Mutations change data
  @Mutation(() => [Genre])
  createGenre(@Args('createGenreInput') createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  // Replaces @Patch(':id')
  @Mutation(() => Genre)
  updateGenre(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateGenreInput') updateGenreDto: UpdateGenreDto,
  ) {
    return this.genresService.update(id, updateGenreDto);
  }

  // Replaces @Delete(':id')
  @Mutation(() => Genre)
  removeGenre(@Args('id', { type: () => Int }) id: number) {
    return this.genresService.remove(id);
  }
}