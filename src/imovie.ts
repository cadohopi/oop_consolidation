// IMovie.ts
import Genre from "./genre";

interface IMovie {
  title: string;
  director: string;
  releaseYear: number;
  genre: Genre;
  setRating(rating: number): void;
  getRating(): number;
  getDetails(): string;
}

export default IMovie;