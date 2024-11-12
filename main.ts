// main.ts
import * as readline from 'readline-sync';
import Genre from './src/genre';
import Movie from './src/movie';
import MovieCollection from './src/movie_collection';
const movieCollection = new MovieCollection();
const genres: Genre[] = [];

// Tạo các thể loại
const action = new Genre("Action", "Fast-paced movies with a lot of physical activity.");
const drama = new Genre("Drama", "Movies with realistic settings and intense character development.");
genres.push(action, drama);

// Tạo phim và thêm vào thư viện
const movie1 = new Movie("Inception", "Christopher Nolan", 2010, action);
const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994, drama);

movie1.setRating(4.8);
movie2.setRating(5);

movieCollection.addMovie(movie1);
movieCollection.addMovie(movie2);

function showMenu() {
  console.log("\n--- Movie Collection Menu ---");
  console.log("1. List all movies");
  console.log("2. Search for a movie by title");
  console.log("3. Rate a movie");
  console.log("4. Add a new movie");
  console.log("5. Remove a movie");
  console.log("6. Exit");
}

function handleMenu() {
  let exit = false;
  while (!exit) {
    showMenu();
    const choice = readline.question("Choose an option: ");
    switch (choice) {
      case '1':
        console.log("\nMovies in the library:");
        movieCollection.listMovies().forEach(movieDetails => console.log(movieDetails));
        break;
      case '2':
        const searchTitle = readline.question("Input the title: ");
        const foundMovie = movieCollection.findMovieByTitle(searchTitle);
        if (foundMovie) {
          console.log(`\nFound movie: ${foundMovie.getDetails()}`);
        } else {
          console.log(`\nMovie with title "${searchTitle}" not found.`);
        }
        break;
      case '3':
        const rateTitle = readline.question("Enter the title of the movie to rate: ");
        const rating = parseFloat(readline.question("Enter rating (0-5): "));
        console.log(movieCollection.rateMovie(rateTitle, rating));
        break;
      case '4':
        const title = readline.question("Enter the movie title: ");
        const director = readline.question("Enter the director: ");
        const releaseYear = parseInt(readline.question("Enter the release year: "), 10);
        
        console.log("Choose a genre:");
        genres.forEach((genre, index) => console.log(`${index + 1}. ${genre.name} - ${genre.description}`));
        const genreChoice = parseInt(readline.question("Choose a genre number: "), 10) - 1;
        const genre = genres[genreChoice] || drama; // Default to drama if invalid

        const newMovie = new Movie(title, director, releaseYear, genre);
        movieCollection.addMovie(newMovie);
        console.log(`Movie "${title}" added to the library.`);
        break;
      case '5':
        const removeTitle = readline.question("Enter the title of the movie to remove: ");
        console.log(movieCollection.removeMovie(removeTitle));
        break;
      case '6':
        exit = true;
        console.log("Exited!");
        break;
      default:
        console.log("Invalid choice, please try again.");
    }
  }
}

handleMenu();
