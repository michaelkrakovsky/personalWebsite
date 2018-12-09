import { Book } from "./book.model";

export class ReadingList {
    
    readingList: Book[] = [
        new Book("Crime and Punishment", "Fyodor Dostoevsky", 1866),
        new Book("The Old Man and the Sea", "Ernest Hemingway", 1952),
        new Book("Beyond Good and Evil", "Friedrich Nietzsche", 1886),
        new Book("A Confession", "Leo Tolstory", 1882),
        new Book("Adventures of Huckleberry Finn", "Mark Twain", 1884),
        new Book("Gulag", "Anne Applebaum", 2001),
        new Book("How I Play Golf", "Tiger Woods", 2001),
        new Book("Golf is not a Game of Perfect", "Bob Rotella", 1995),
        new Book("1984", "George Orwell", 1949),
        new Book("Lord of the Lies", "William Golding", 1954),
        new Book("The Modern Fundamentals of Golf", "Ben Hogan", 1957),
        new Book("Meditation: An In-Depth Guide", "Ian Gawler & Paul Bedson", 2010),
        new Book("The Bill James Historical Baseball Abstract", "Bill James", 2001),
        new Book("The 48 Laws of Power", "Robert Greene", 1998), 
        new Book("The Count of Monte Cristo", "Alexandre Dumas", 1845), 
        new Book("The Prince", "Niccolò Machiavelli", 1532)
    ];

    getReadingList() {
        return this.readingList.slice();
    }

}