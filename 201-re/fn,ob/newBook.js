class Book{
    constructor(isbn, title = 'untitled', ebook = false){
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }

    addAuthor(fn, ln) {
        return this.authors.push({ firstname: fn,lastname: ln})

    }
  
    getFirstAuthor() {
        return this.authors[0] 
        
    }
    getLastAuthor(){
        return this.authors[this.authors.length-1]
    }

    getCoAuthors() {
      return this.authors.slice(1,this.authors.length)

    //   const [,...coauthors] = this.authors
    //   return coauthors
    }
    findAuthor(firstname, lastname) {
        return this.authors.find((author) => {
            return(
            author.firstname.toLowerCase() === firstname.toLowerCase() && author.lastname.toLowerCase() === lastname.toLowerCase()
        )})
    }
    hasEbook() {
        return this.ebook
    }


}

// const book1 = new Book()
const book1 = new Book('345-6','pc',true)
console.log(book1.addAuthor('s1', 'gu'))
console.log(book1.addAuthor('s2', 'gu'))
console.log(book1.addAuthor('s3', 'gu'))
console.log(book1.addAuthor('s4', 'gu'))
console.log(book1.addAuthor('s5', 'gu'))
console.log(book1)

const book2 = new Book('123-4','js',false)
console.log(book2.addAuthor('jj', 'king'))
console.log(book2.addAuthor('pp', 'hu'))
console.log(book2)


console.log(book1.getFirstAuthor())
console.log(book2.getFirstAuthor())

console.log(book1.getLastAuthor())
console.log(book2.getLastAuthor())

console.log(book1.getCoAuthors())
console.log(book2.getCoAuthors())

console.log(book1.findAuthor('s2','GU'))
console.log(book2.hasEbook())

// //destruction on array
// const x = [5, 10, 15]
// //rest + destructuring
// const [firstItem, ...remainingItems] = x
// console.log(firstItem) //5
// console.log(remainingItems) //10,15