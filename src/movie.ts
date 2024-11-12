// Movie.ts
import Media from './media';
import Genre from './genre';
import IMovie from './imovie';

class Movie extends Media implements IMovie {
  protected rating: number = 0;
  public genre: Genre;

  constructor(title: string, director: string, releaseYear: number, genre: Genre) {
    super(title, releaseYear, director);
    this.genre = genre;
  }

  setRating(rating: number): void {
    this.rating = rating;
  }

  getRating(): number {
    return this.rating;
  }

  getDetails(): string {
    return `- ${super.getDetails()} - Genre: ${this.genre.name} - Rating: ${this.getRating() || "Not rated yet"}`;
  }
}

export default Movie;