import { Book } from "./book.model";

export class ReadingList {
    
    readingList: Book[] = [
        new Book("Crime and Punishment", "Fyodor Dostoevsky", 1866),
        new Book("The Old Man and the Sea", "Ernest Hemingway", 1952),
        new Book("Beyond Good and Evil", "Friedrich Nietzsche", 1886),
        new Book("A Confession", "Leo Tolstory", 1882),
        new Book("Adventures of Huckleberry Finn", "Mark Twain", 1884),
        new Book("Gulag: A History", "Anne Applebaum", 2001),
        new Book("How I Play Golf", "Tiger Woods", 2001),
        new Book("Golf is not a Game of Perfect", "Bob Rotella", 1995),
        new Book("1984", "George Orwell", 1949),
        new Book("Lord of the Flies", "William Golding", 1954),
        new Book("The Modern Fundamentals of Golf", "Ben Hogan", 1957),
        new Book("Meditation: An In-Depth Guide", "Ian Gawler & Paul Bedson", 2010),
        new Book("The Bill James Historical Baseball Abstract", "Bill James", 2001),
        new Book("The 48 Laws of Power", "Robert Greene", 1998), 
        new Book("The Count of Monte Cristo", "Alexandre Dumas", 1845), 
        new Book("The Prince", "Niccolò Machiavelli", 1532), 
        new Book("Animal Farm", "George Orwell", 1945), 
        new Book("11/22/63", "Stephen King", 2011), 
        new Book("Capital in the Twenty-First Century", "Thomas Piketty", 2013), 
        new Book("Churchill and Orwell: The Fight for Freedom", "Thomas E. Ricks", 2017), 
        new Book("12 Rules for Life: An Antidote to Chaos", "Jordan Peterson", 2018), 
        new Book("A Tale of Two Cities", "Charles Dickens", 1859), 
        new Book("In the Realm of Hungry Ghosts", "Gabor Maté", 2009), 
        new Book("Brave New World", "Aldous Huxley", 1932),
        new Book("Radical Candor", "Kim Scott", 2017),
        new Book("Man and His Symbols", "C.G. Jung", 1968), 
        new Book("For Whom the Bell Tolls", "Ernest Hemingway", 1940), 
        new Book("An Outline of Psycho-Analysis", "Sigmund Freud", 1940), 
        new Book("The Brothers Karamazov", "Fyodor Dostoevsky", 1880)
    ];

    getReadingList() {
        return this.readingList.slice();
    }

}