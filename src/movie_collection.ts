// MovieCollection.ts
import Movie from './movie';
import IMovieCollection from './imovie_collection';

class MovieCollection {
    private movies: Movie[] = [];

    constructor(initialMovies: Movie[] = []) {
        this.movies = initialMovies;
    }

    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    listMovies(): string[] {
        return this.movies.map(movie => movie.getDetails());
    }

    findMovieByTitle(title: string): Movie | null {
        return this.movies.find(movie => movie.title.toLowerCase() === title.toLowerCase()) || null;
    }

    rateMovie(title: string, rating: number): string {
        const movie = this.findMovieByTitle(title);
        if (movie) {
        movie.setRating(rating);
        return `Rating set for movie "${movie.title}"!`;
        } else {
        return `Movie with title "${title}" not found.`;
        }
    }

    removeMovie(title: string): string {
        const index = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());
        if (index !== -1) {
        const removedMovie = this.movies.splice(index, 1)[0];
        return `Movie "${removedMovie.title}" has been removed from the library.`;
        } else {
        return `Movie with title "${title}" not found.`;
        }
    }
}

export default MovieCollection;
