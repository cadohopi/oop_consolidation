# oop_consolidation

# Movie Collection Project

This is a TypeScript-based project that simulates a movie collection system. The system allows you to add, rate, search, and remove movies, as well as organize them into genres. The project demonstrates the use of classes, inheritance, interfaces, method overloading, and other TypeScript features.

## Features
- **Add Movies**: You can add movies individually or in bulk to the collection.
- **Rate Movies**: Movies can be rated on a scale from 0 to 5.
- **List Movies**: Display all movies in the collection with their details.
- **Search Movies**: Search for a movie by its title.
- **Remove Movies**: Remove a movie from the collection by its title or index.
- **Genres**: Movies can be assigned to specific genres (e.g., Action, Drama).

## Project Structure

src/ ├── genre.ts # Genre class definition  
        ├── media.ts # Abstract Media class  
        ├── movie.ts # Movie class (extends Media)  
        ├── imovie_collection.ts # MovieCollection interface  
        ├── movie_collection.ts # MovieCollection class (handles movie operations)  
└── main.ts # Entry point (runs the application)

## Installation
To run the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cadohopi/oop_consolidation.git

2. **Navigate into the project folder**:

3. **Install dependencies: Make sure you have Node.js installed, then install the required packages**:
   ```bash
   npm install
4. **Install ts-node and typescript**:
   ```bash
   npm install ts-node typescript --save-dev
5. **Modify the package.json**:
   In your package.json, under the "scripts" section, you can add:
    "scripts": {
        "start": "ts-node src/main.ts"
    }
6. **Run the Project with ts-node**:
   ```bash
   npm start

## Usage
When you run the program, you will be presented with a menu to choose various actions related to movie management. The available actions are:

1. *List all movies*: Displays a list of all movies in the collection.
2. *Search for a movie by title*: Allows you to search for a specific movie.
3. *Rate a movie*: Lets you rate a movie on a scale of 0 to 5.
4. *Add a new movie*: Prompts you to enter the title, director, release year, and genre for a new movie.
5. *Remove a movie*: Removes a movie by its title or index.
6. *Exit*: Exits the application.

## Contributing
Feel free to fork the repository, submit pull requests, or open issues. Contributions are always welcome!


