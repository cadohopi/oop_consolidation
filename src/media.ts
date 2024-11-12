// Media.ts
class Media {
  constructor(
    public title: string,
    public releaseYear: number,
    public director: string
  ) {}

  getDetails(): string {
    return `${this.title} (${this.releaseYear}) directed by ${this.director}`;
  }
}

export default Media;