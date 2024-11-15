// genre_collection.ts
import Genre from "./genre";

class GenreCollecttion {
    public genres: Genre[] = [];

    constructor(initialGenres: Genre[] = []) {
        this.genres = initialGenres;
    }

    listGenre(): void {
    if (this.genres.length === 0) {
        console.log("No movies in the collection");
    } else {
        this.genres.forEach((genre, index) => {
            console.log(`${index + 1}: ${genre.getGenreDetails()}`);
        })
    }
}

}

export default GenreCollecttion;