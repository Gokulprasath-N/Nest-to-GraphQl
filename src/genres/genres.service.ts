import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreDto } from '../dto/create-genre.dto';
import { UpdateGenreDto } from '../dto/update-genre.dto';
import { Genre } from '../entities/genre.entity';

@Injectable()
export class GenresService {
  // Your exact array from the Express app
  private genres: Genre[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Horror' },
    { id: 5, name: 'Sci-Fi' },
    { id: 6, name: 'Romance' },
    { id: 7, name: 'Thriller' },
  ];

  // Just a TypeScript type for autocomplete & type safety
  create(createGenreDto: CreateGenreDto) {
    const newGenre = {
      id: this.genres.length + 1,
      name: createGenreDto.name,
    };
    this.genres.push(newGenre);
    return this.genres; // Returning all genres like your Express app did
  }

  findAll() {
    return this.genres;
  }

  findOne(id: number) {
    const genre = this.genres.find((g) => g.id === id);
    if (!genre) {
      // Replaces: res.status(404).send("Genre not found")
      throw new NotFoundException('Genre not found');
    }
    return genre;
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    const genre = this.findOne(id); // Reuses the 404 check above
    if (updateGenreDto.name) {
      genre.name = updateGenreDto.name;
    }
    return genre;
  }

  remove(id: number) {
    const genre = this.findOne(id); // Reuses the 404 check above
    const index = this.genres.indexOf(genre);
    this.genres.splice(index, 1);
    return genre;
  }
}