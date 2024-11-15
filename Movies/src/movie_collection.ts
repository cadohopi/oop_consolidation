// MovieCollection.ts
import * as readline from 'readline-sync';
import Movie from './movie';
import Genre from './genre';
import IMovieCollection from './imovie_collection';
import GenreCollecttion from './genre_collection';

const genreCollecttion = new GenreCollecttion();

// Tạo các thể loại
const action = new Genre("Action", "Fast-paced movies with a lot of physical activity.");
const drama = new Genre("Drama", "Movies with realistic settings and intense character development.");

// Thêm genre vào collection
genreCollecttion.genres.push(action, drama);

class MovieCollection implements IMovieCollection {
    private movies: Movie[] = [];

    constructor(initialMovies: Movie[] = []) {
        this.movies = initialMovies;
    }

    // Overload
    addMovie(movie: Movie): void;

    addMovie(title: string, director: string, releaseYear: number, genre: Genre): void;

    addMovie(arg1: Movie | string, arg2?: string, arg3?: number, arg4?: Genre): void {
        // Nếu arg1 là 1 movie
        if (arg1 instanceof Movie) {
            this.movies.push(arg1);
            console.log(`Movie ${arg1.title} added successfully!`);
        } else if (typeof arg1 === 'string' && arg2 && arg3 && arg4) {
            const newMovie = new Movie(arg1, arg2, arg3, arg4);
            this.movies.push(newMovie);
            console.log(`Movie ${arg1} added successfully!`);
        } else {
            console.log("Error!");
        }
    }


    // Thêm nhiều phim từ bàn phím
    addMovies(): void{
        while (true) {
            const title = readline.question("Enter title (type 'no' to stop): ");
            if (title.toLowerCase() === 'no') break;
            
            const director = readline.question("Enter the director: ");
            const releaseYear = parseInt(readline.question("Enter the release year: "), 10);
            
            console.log("Choose a genre:");
            genreCollecttion.listGenre();
            const genreChoice = parseInt(readline.question("Choose a genre number: "), 10);
            if (genreChoice > 0 && genreChoice <= genreCollecttion.genres.length) {
                this.addMovie(title, director, releaseYear, genreCollecttion.genres[genreChoice - 1]);
            }
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
