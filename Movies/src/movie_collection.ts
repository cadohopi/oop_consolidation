// MovieCollection.ts
import * as readline from 'readline-sync';
import Movie from './movie';
import IMovieCollection from './imovie_collection';

class MovieCollection {
    private movies: Movie[] = [];

    constructor(initialMovies: Movie[] = []) {
        this.movies = initialMovies;
    }

    // Overload
    addMovie(movie: Movie): void;

    addMovie(movies: Movie[]): void;

    addMovie(movieOrMovies: Movie | Movie[]): void {
        if (Array.isArray(movieOrMovies)) {
            this.movies.push(...movieOrMovies); // Thêm một danh sách phim
        } else {
            this.movies.push(movieOrMovies); // Thêm 1 phim duy nhất
        }
    }

    // Danh sách phim trong collection
    listMovies(): void {
        if (this.movies.length === 0) {
            console.log("No movies in the collection");
        } else {
            this.movies.forEach((movie, index) => {
                console.log(`${index + 1}. ${movie.getDetails()}`);
            })
        }
    }

    // Tìm phim theo title
    findMovieByTitle(title: string): Movie | null {
        return this.movies.find(movie => movie.title.toLowerCase() === title.toLowerCase()) || null;
    }

    // Đánh giá phim
    rateMovie(): void {
        console.log("Movies in the colection: ");
        this.listMovies();
        const serialNumber = readline.questionInt("Enter the number of the movie to rate: ");

        if (serialNumber > 0 && serialNumber <= this.movies.length) {
            const rating = readline.questionInt("Enter rating [0-5]: ");
            this.movies[serialNumber - 1].setRating(rating);
            console.log(`Movie "${this.movies[serialNumber - 1].title}" rated  successfully!`);
        } else {
            console.log("Invalid serial number!");
        }
    }

    // Xóa phim khỏi collection
    removeMovie(): void {
        console.log("Movies in the collection: ");
        this.listMovies();
        const serialNumber = readline.questionInt("Enter the number of movie to remove: ");

        if (serialNumber > 0 && serialNumber <= this.movies.length) {
            const removeMovie = this.movies.splice(serialNumber - 1, 1);
            console.log(`Movie ${removeMovie[0].title} removed successfully!`);
        } else {
            console.log("Invalid serial number!");
        }

    }
}

export default MovieCollection;
