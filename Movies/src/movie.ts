// Movie.ts
import Media from './media';
import Genre from './genre';

class Movie extends Media {
  protected rating: number = 0;
  public genre: Genre;

  constructor(title: string, director: string, releaseYear: number, genre: Genre) {
    super(title, director, releaseYear);
    this.genre = genre;
  }

  setRating(rating: number): void {
    this.rating = rating;
  }

  getRating(): number {
    return this.rating;
  }

  // Triển khai phương thức trừu tượng getDetails từ Media
  getDetails(): string {
    return `Title: ${this.title}, Release Year: ${this.releaseYear}, Directed by: ${this.director} - Genre: ${this.genre.name} - Rating: ${this.rating || "Not rated yet"}`;
  }
}

export default Movie;