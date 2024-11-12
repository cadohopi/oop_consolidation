// MovieCollection.ts
import IMovie from './imovie';
import IMovieCollection from './imovie_collection';

class MovieCollection implements IMovieCollection {
    private movies: IMovie[] = [];

    // Hàm thêm phim
    addMovie(movie: IMovie): void {
        this.movies.push(movie);
    }

    // Hàm trả về thông tin của phim
    listMovies(): string[] {
        return this.movies.map(movie => movie.getDetails());
    }

    // Hàm tìm phim theo tên
    findMovieByTitle(title: string): IMovie | null {
        return this.movies.find(movie => movie.title.toLowerCase() === title.toLowerCase()) || null;
    }

    // Hàm tạo giá trị rating cho phim
    rateMovie(title: string, rating: number): string {
        const movie = this.findMovieByTitle(title);
        if (movie) {
        movie.setRating(rating);
        return `Rating set for movie "${movie.title}"!`;
        } else {
        return `Movie with title "${title}" not found.`;
        }
    }

    // Hàm xóa phim khỏi collection
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
