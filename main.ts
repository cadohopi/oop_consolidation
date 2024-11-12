// main.ts
import * as readline from 'readline-sync';

import { Genre } from './src/genre';
import { Movie } from './src/movie';
import { MovieCollection } from './src/movie_collection';

const movieCollection = new MovieCollection();
const genres: Genre[] = [];

const action = new Genre("Action", "Fast-paced movies with a lot of physical activity.");
const drama = new Genre("Drama", "Movies with realistic settings and intense character development.");
genres.push(action, drama);

const movie1 = new Movie("Inception", "Christopher Nolan", 2010, action);
const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994, drama);
movieCollection.addMovie(movie1);
movieCollection.addMovie(movie2);

movie1.setRating(4.8);
movie2.setRating(5);

// Hàm nhập thông tin thể loại từ bàn phím
function inputGenre(): Genre {
    const genreName = readline.question("Enter genre name: ");
    const genreDescription = readline.question("Enter genre description: ");
    return new Genre(genreName, genreDescription);
}

// Hàm nhập thông tin phim từ bàn phím
function inputMovie(): void {
    if (genres.length === 0) {
        console.log("No genres available. Please add a genre first.");
        return;
    }
    
    const title = readline.question("Enter movie title: ");
    const director = readline.question("Enter movie director: ");
    const releaseYear = parseInt(readline.question("Enter release year: "));
    
    // Chọn thể loại cho phim
    console.log("\nChoose a genre:");
    genres.forEach((genre, index) => {
        console.log(`${index + 1}. ${genre.name} - ${genre.description}`);
    });
    
    const genreIndex = parseInt(readline.question("Enter genre number: ")) - 1;
    if (genreIndex >= 0 && genreIndex < genres.length) {
        const genre = genres[genreIndex];
        const movie = new Movie(title, director, releaseYear, genre);
        movieCollection.addMovie(movie);
        console.log(`Movie "${title}" added successfully!`);
    } else {
        console.log("Invalid genre selection.");
    }
    }

    // Hàm thiết lập xếp hạng cho phim
    function rateMovie(): void {
    if (movieCollection.listMovies().length === 0) {
        console.log("No movies available to rate.");
        return;
    }
    
    console.log("\nMovies:");
    movieCollection.listMovies().forEach((movie, index) => {
        console.log(`${index + 1}. ${movie}`);
    });
    
    const movieIndex = parseInt(readline.question("Select movie number to rate: ")) - 1;
    const movies = movieCollection.listMovies();
    if (movieIndex >= 0 && movieIndex < movies.length) {
        const rating = parseFloat(readline.question("Enter rating (0-5): "));
        movies[movieIndex].setRating(rating);
        console.log(`Rating set for movie "${movies[movieIndex]}"!`);
    } else {
        console.log("Invalid movie selection.");
    }
    }

    // Hàm tìm kiếm phim theo tên
    function searchMovie(): void {
    const searchTitle = readline.question("Input the title of the movie to search: ");
    const foundMovie = movieCollection.findMovieByTitle(searchTitle);
    if (foundMovie) {
        console.log(`\nFound movie: ${foundMovie.getDetails()}`);
    } else {
        console.log(`\nMovie with title "${searchTitle}" not found.`);
    }
    }

    // Vòng lặp menu chính
    function showMenu() {
    console.log("\n--- Movie Collection Menu ---");
    console.log("1. Add a new genre");
    console.log("2. Add a new movie");
    console.log("3. Rate a movie");
    console.log("4. Search for a movie by title");
    console.log("5. List all movies");
    console.log("6. Exit");
    }

    let isRunning = true;
    while (isRunning) {
    showMenu();
    const choice = readline.question("Choose an option: ");
    
    switch (choice) {
        case '1':
        const newGenre = inputGenre();
        genres.push(newGenre);
        console.log(`Genre "${newGenre.name}" added successfully!`);
        break;
        case '2':
        inputMovie();
        break;
        case '3':
        rateMovie();
        break;
        case '4':
        searchMovie();
        break;
        case '5':
        console.log("\nMovies in the library:");
        movieCollection.listMovies().forEach(movieDetails => console.log(`${movieDetails.title} (${movieDetails.releaseYear}) derected by ${movieDetails.director} - Genre: ${movieDetails.genre.name} - Rating: ${movieDetails.getRating()}`));
        break;
        case '6':
        console.log("Exited!");
        isRunning = false;
        break;
        default:
        console.log("Invalid option. Please choose again.");
    }
}
