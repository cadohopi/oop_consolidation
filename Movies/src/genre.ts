// Genre.ts
class Genre {
  public name: string;
  public description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  getName(): string{
    return this.name;
  }

  getGenreDetails(): string {
    return `${this.name}: ${this.description}`
  }

}

export default Genre;
