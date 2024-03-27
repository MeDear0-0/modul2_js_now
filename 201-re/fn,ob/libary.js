class Book {
    constructor(title, author, pages, genre) {
      this.title = title
      this.author = author
      this.pages = pages
      this.genre = genre
    }
  
    getSummary() {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`
    }
  }
  

class Library {
    constructor(name) {
      this.name = name;
      this.books = []
    }
  
    addBook(book) {
      this.books.push(book)
    }
  
    getBooksByGenre(genre) {
      return this.books.filter((book) => book.genre === genre)
    }
  
    getTotalPagesByGenre(genre) {
      return this.books.filter((book) => book.genre === genre).reduce((total, book) => total + book.pages, 0)
    }
  }

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 223, "Fantasy")
const book2 = new Book("The Lord of the Rings: The Fellowship of the Ring", "J.R.R. Tolkien", 480, "Fantasy")

const library = new Library("My Library")
library.addBook(book1)
library.addBook(book2)

console.log(library.getBooksByGenre("Fantasy"))
console.log(library.getTotalPagesByGenre("Fantasy"))
