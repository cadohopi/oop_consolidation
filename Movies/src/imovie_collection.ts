// IMovieCollection.ts
import Movie from "./movie";

interface IMovieCollection {
  addMovie(movie: Movie): void;
  listMovies(): void;
  findMovieByTitle(title: string): Movie | null;
  rateMovie(): void;
  removeMovie(): void;
}

export default IMovieCollection;