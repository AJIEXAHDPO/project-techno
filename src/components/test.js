class PrintEditionItem {
  constructor({name, releaseDate, pagesCount, state=100}){
    this.name = name;
    this.releaseDate = releaseDate;
    this.state = state;
    this.type = null;
  }
  
  fix() {
    this.state*=1.5;
  }
  
  set(state) {
    const result = state>100? 100: state;
    return result;
  }
}

class Book extends PrintEditionItem {
  constructor({name, releaseDate, pagesCount, state=100, author}){
    super({name, releaseDate, pagesCount, state});
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor({name, releaseDate, pagesCount, state=100, author}){
    super({name, releaseDate, pagesCount, state, author});
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor({name, releaseDate, pagesCount, state=100, author}){
    super({name, releaseDate, pagesCount, state, author});
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor({name, releaseDate, pagesCount, state=100, author}){
    super({name, releaseDate, pagesCount, state, author});
    this.type = "detective";
  }
}

const params = [
  {
    name: "Шерлок Холмс",
    releaseDate: "1890",
    pagesCount: 1000,
    author: "А. Конандойль",
    state: 20
  },
  {
    name: "Солярис",
    releaseDate: "1970",
    pagesCount: 700,
    author: "С. Лем",
    state: 50
  },
  {
    name: "Град обреченный",
    releaseDate: "1980",
    pagesCount: 900,
    author: "Стругацкие",
    state: 90
  },
  {
    name: "Плавучий остров",
    releaseDate: "1880",
    pagesCount: 600,
    author: "Ж. Верн",
    state: 80
  },
];


class Library {
  constructor (name) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (book.state>30) this.books.push(book);
    else console.log(`Книга ${book.name} слишком изношена`);
  }
  
  findBookBy(type, value) {
    const result = this.books.filter(
      (elem)=> elem[type] === value);
    console.log(result);
  }
  
  giveBookByName(book) {
    const elemNum = this.books.reduce((acc, elem, num)=> elem.name === book? num: acc, 0);
    const result = this.books.splice(elemNum, 1);
    console.log(result);
    console.log(this.books);
  }
}

const book1 = new DetectiveBook(params[0]);
const book2 = new FantasticBook(params[1]);
const book3 = new NovelBook(params[2]);
const book4 = new NovelBook(params[3]);

const library1 = new Library("Публичная библиотека");

library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
library1.addBook(book4);

library1.findBookBy("name", "Солярис");

library1.giveBookByName("Плавучий остров");