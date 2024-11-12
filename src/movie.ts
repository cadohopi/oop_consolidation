// Movie.ts
import { Media } from './media';
import { Genre } from './genre';

export class Movie extends Media{
    constructor(
        public title: string,
        public director: string,
        public releaseYear: number,
        public genre: Genre,
        private rating: number = 0 // default value
    ) {
        super(title, releaseYear, director); // Gọi constructor của lớp Media
    }

        getDetails(): string {
        return `${this.title} (${this.releaseYear}) directed by ${this.director} - Genre: ${this.genre.name} - Rating: ${this.rating}/5`;
    }

        setRating(rating: number): void {
        if (rating < 0 || rating > 5) {
        throw new Error("Rating must be between 0 and 5");
        }
        this.rating = rating;
        }

        getRating(): number {
            return this.rating;
    }
}
