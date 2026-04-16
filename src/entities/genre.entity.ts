import { ObjectType, Field, Int } from '@nestjs/graphql';

// @ObjectType() tells GraphQL that this is a returnable model
@ObjectType()
export class Genre {
  @Field(() => Int) // Explicitly declare as an Integer
  id: number;

  @Field() // Defaults to String
  name: string;
}