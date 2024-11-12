// MovieCollection.ts
import { Movie } from "./movie";

export class MovieCollection {
    private movies: Movie[] = [];

    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    listMovies(): Movie[] {
        return this.movies;
    }

    findMovieByTitle(title: string): Movie | null {
        return this.movies.find(movie => movie.title.toLowerCase() === title.toLowerCase()) || null;
    }
}
