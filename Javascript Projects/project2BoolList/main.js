class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = []; // Initialize books array if nothing is in local storage
        } else {
            books = JSON.parse(localStorage.getItem('books')); // Parse the JSON string into an array
        }
        return books; // Return the books array
    }

    static addBook(bookObj) {
        const books = Store.getBooks(); // Fetch current books
        books.push(bookObj); // Add new book object
        localStorage.setItem('books', JSON.stringify(books)); // Update local storage
    }

    static removeBooks(isbn) {
        const books = Store.getBooks(); // Get current books

        // Filter out the book with the specified ISBN
        const updatedBooks = books.filter(book => book.isbn !== isbn);
        
        localStorage.setItem('books', JSON.stringify(updatedBooks)); // Update local storage
    }
}

// UI Class to display books and handle user interactions
class UI {
    // Hardcoded data
    static displayBooks() {
        const books = Store.getBooks(); // Fetch books from storage

        // For each item in the books array, add it to the list
        books.forEach((book) => UI.addBookToList(book));
    }

    // Function to add a book
    static addBookToList(book) {
        const list = document.getElementById('book-list'); // Capture the list
        
        // Create row to input data
        const row = document.createElement('tr');
        
        // Edit innerHTML to store the data in a column
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        
        // Append the row to the list
        list.appendChild(row); // Append row to the list
    }

    // Clear the fields
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    // Delete the element from this list 
    static deleteTarget(el) {
        if (el.classList.contains('delete')) {
            if (confirm('Are you sure?')) {
                // We use two times parent element as the parent element of the button is td 
                // and td parent element is the row, so we have to delete the row
                const isbn = el.parentElement.previousElementSibling.textContent; // Get ISBN for removal
                el.parentElement.parentElement.remove(); // Remove from UI
                Store.removeBooks(isbn); // Remove from localStorage
            }
        } else {
            return;
        }
    }

    // Check for empty fields
    static emptyFields() {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;
        if (title === '' || author === '' || isbn === '') {
            alert('Please fill all the fields'); // Alert if fields are empty
            return true; // Return true if fields are empty
        } else {
            return false; // Return false if all fields are filled
        }
    }
}

// Display the books in the DOM on initial load
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Add book form event listener
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual submit

    // If fields are empty, return
    if (UI.emptyFields()) {
        return;
    }

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Create a new Book object
    const bookObj = new Book(title, author, isbn);
    
    // Add Book to UI
    UI.addBookToList(bookObj);
    Store.addBook(bookObj); // Correct method call to add book
    UI.clearFields(); // Clear input fields
});

// Select the list and add delete functionality
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteTarget(e.target); // Handle delete
});
