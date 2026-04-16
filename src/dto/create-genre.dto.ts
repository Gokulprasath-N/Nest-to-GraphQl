import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength, IsNotEmpty } from 'class-validator';

// @InputType() marks this class as an input for Mutations
@InputType()
export class CreateGenreDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;
}