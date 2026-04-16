import { InputType, PartialType } from '@nestjs/graphql';
import { CreateGenreDto } from './create-genre.dto';

// Note: We now import PartialType from '@nestjs/graphql' instead of '@nestjs/mapped-types'
@InputType()
export class UpdateGenreDto extends PartialType(CreateGenreDto) {}