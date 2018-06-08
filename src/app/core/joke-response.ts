import { Joke } from 'src/app/core/joke';

export interface JokeResponse {
  type: string;
  value: Joke[];
}
