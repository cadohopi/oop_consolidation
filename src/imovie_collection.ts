// IMovieCollection.ts
import Movie from "./movie";

interface IMovieCollection {
  addMovie(movie: Movie): void;
  listMovies(): string[];
  findMovieByTitle(title: string): Movie | null;
  rateMovie(title: string, rating: number): string;
  removeMovie(title: string): string;
}

export default IMovieCollection;