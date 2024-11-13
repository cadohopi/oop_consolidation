// Media.ts
abstract class Media {
 // Các thuộc tính chung cho tất cả các phương tiện
  public title: string;
  public director: string;
  public releaseYear: number;

  // Constructor để khởi tạo các thuộc tính chung
  constructor(title: string, director: string, releaseYear: number) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
  }

  // Phương thức trừu tượng phải được triển khai bởi các lớp con
  abstract getDetails(): string;
}

export default Media;