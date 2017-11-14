class BookReader {
    constructor(usersStore, bookStore) {
        this.usersStore = usersStore;
        this.bookStore = bookStore;
        this.activeUser = null;
        this.activeBook = null;
    }

    openBook(bookName) {
        if (this.bookStore.hasBook(bookName)) {
            var pageNumber = this.activeUser.settings.pages[bookName] || 0;
            this.activeBook = this.bookStore.getBook(bookName);
            console.log('open book: ', this.activeBook);
            this.setPage(pageNumber);
        }
    }

    closeBook() {
        if (this.activeBook) {
            this.activeBook = null;
            console.log('close book');
        }
    }

    addBook(book) {
        if (!this.bookStore.hasBook(book)) {
            this.bookStore.addBook(book);
            console.log('add book: ', book);
        }
    }

    nextPage() {
        if (this.activeBook) {
            this.setPage(this.getCurrentPageNumber() + 1);
        }
    }

    prevPage() {
        if (this.activeBook) {
            this.setPage(this.getCurrentPageNumber() - 1);
        }
    }

    setPage(pageNumber) {
        if (this.activeBook) {
            var page = this.activeBook.getPage(pageNumber);
            this.displayPage(page);
            this.setCurrentPageNumber(pageNumber);
        }
    }

    getCurrentPageNumber() {
        return this.activeUser.settings.pages[this.activeBook.name];
    }

    setCurrentPageNumber(pageNumber) {
        this.activeUser.settings.pages[this.activeBook.name] = pageNumber;
    }

    displayPage(page) {
        console.log('display page: ', page);
    }

    start() {
        if (this.activeBook) {
            this.setPage(0);
        }
    }

    end() {
        if (this.activeBook) {
            this.setPage(this.activeBook.pagesNumber);
        }
    }

    increaseFontSize() {
        if (this.activeUser) {
            this.setFontSize(this.activeUser.settings.fontSize + 1);
        }
    }

    decreaseFontSize() {
        if (this.activeUser) {
            this.setFontSize(this.activeUser.settings.fontSize - 1);
        }
    }

    setFontSize(size) {
        if (this.activeUser) {
            this.activeUser.settings.fontSize = Math.max(Math.min(size, 40), 8);
            console.log('set font size: ', this.activeUser.settings.fontSize);
        }
    }

    setColor(color) {
        if (this.activeUser) {
            this.activeUser.settings.color = color;
            console.log('set color: ', this.activeUser.settings.color);
        }
    }

    signUp(user) {
        if (!this.usersStore.hasUser(user)) {
            console.log('singUp: ', user);
            this.usersStore.addUser(user);
        }
    }

    login(user) {
        if (this.usersStore.hasUser(user)) {
            console.log('login: ', user);
            this.activeUser = this.usersStore.getUser(user);
            this.applySettings(this.activeUser.settings);
        }
    }

    logout(user) {
        this.activeUser = null;
        console.log('logout');
    }

    applySettings(settings) {
        console.log('apply settings: ', settings);
    }
}

class UsersStore {
    constructor() {
        this.profiles = {};
    }
    hasUser(user) {
        return this.profiles[user.name];
    }
    addUser(user) {
        this.profiles[user.name] = new Profile(user.name);
    }
    getUser(user) {
        return this.profiles[user.name];
    }
}

class BooksStore {
    constructor() {
        this.books = [];
    }
    hasBook(bookName) {
        return this.books[bookName];
    }
    addBook(book) {
        this.books[book.name] = book;
    }
    getBook(bookName) {
        return this.books[bookName];
    }
}

class Profile {
    constructor(name) {
        this.name = name;
        this.settings = new Settings();
    }
}

class Settings {
    constructor() {
        this.fontSize = 10;
        this.textColor = "#000";
        this.lastBook = null;
        this.pages = {};
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

class Book {
    constructor(name, pages) {
        this.name = name;
        this.pages = pages;
    }

    getPage(pageNumber) {
        return this.pages[pageNumber];
    }
}

class Page {
    constructor(number, data) {
        this.number = number;
        this.data = data;
    }
}

let usersStore = new UsersStore(),
    bookStore = new BooksStore(),
    pages = [
        new Page(1, 'first-page-data'),
        new Page(2, 'second-page-data'),
        new Page(3, 'third-page-data')
    ],
    book = new Book('history book', pages),
    user = new User('Mike');
    bookReader = new BookReader(usersStore, bookStore),

bookReader.signUp(user);
bookReader.login(user);
bookReader.addBook(book);
bookReader.openBook(book.name);
bookReader.increaseFontSize();
bookReader.nextPage();
bookReader.closeBook();
bookReader.logout();