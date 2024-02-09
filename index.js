let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const LOTR = new Book("LOTR", "Tolkein", 328, false);
const Happy = new Book("Happy", "IDK", 423, false);
const Sad = new Book("Sad", "IDK", 324, false);

myLibrary.push(LOTR);
myLibrary.push(Happy);
myLibrary.push(Sad);

function addBookToLibrary() {
  let addBtn = document.querySelector("#addBookBtn");
  let addForm = document.querySelector("#addBookForm");
  addBtn.addEventListener("click", () => {
    addForm.style.display = "block";
  });
}

function renderLibrary() {
  const libraryContainer = document.querySelector("#LibraryContainer");
  for (let index in myLibrary) {
    let bookDiv = document.createElement("div");
    let bookTitle = myLibrary[index].title;
    let divContent = document.createElement("p");
    bookDiv.className = "bookDiv";
    bookDiv.id = bookTitle;
    divContent.textContent = bookTitle;
    bookDiv.appendChild(divContent);
    libraryContainer.appendChild(bookDiv);
  }
}

renderLibrary();
addBookToLibrary();
