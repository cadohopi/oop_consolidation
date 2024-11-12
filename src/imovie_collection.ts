// IMovieCollection.ts
import IMovie from "./imovie";

interface IMovieCollection {
  addMovie(movie: IMovie): void;
  listMovies(): string[];
  findMovieByTitle(title: string): IMovie | null;
  rateMovie(title: string, rating: number): string;
  removeMovie(title: string): string;
}

export default IMovieCollection;