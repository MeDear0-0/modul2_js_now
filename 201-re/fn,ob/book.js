class Book {
    constructor(title, author, yearPublished) {
      this.title = title || "no title"
      this.author = author || "no author"
      this.yearPublished = yearPublished || 0
    }
  
    getInfo() {
      return `${this.title} by ${this.author} (${this.yearPublished})`
    }

    

  }

  
  

  const JsBook = new Book("newJS", "lucy", 2024)
  console.log(JsBook.getInfo())
