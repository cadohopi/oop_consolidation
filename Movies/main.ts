// main.ts
import * as readline from 'readline-sync';
import MovieCollection from './src/movie_collection';
const movieCollection = new MovieCollection();

function showMenu() {
  console.log("\n--- Movie Collection Menu ---");
  console.log("1. List all movies");
  console.log("2. Search for a movie by title");
  console.log("3. Rate a movie");
  console.log("4. Add new movie(s)");
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
        movieCollection.listMovies();
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
        console.log("\n Rate movie: ");
        movieCollection.rateMovie();
        break;
      case '4':
        movieCollection.addMovies();
        break;
      case '5':
        console.log("\n Remove movie!");
        movieCollection.removeMovie();
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
