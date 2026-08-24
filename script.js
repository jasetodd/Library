const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.uuid = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("Mistborn", "Brandon Sanderson", 541, true);
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1007, false);

function displayBook() {
  const library = document.querySelector(".cards");
  library.innerHTML = "";
  for (const book of myLibrary) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML += `<h2>${book.title}</h2>`;
    card.innerHTML += `<h3>${book.author}</h3>`;
    console.log(book.title);
    library.appendChild(card);
  }
}
displayBook();

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e) => {
  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const pagesInput = document.querySelector("#pages").value;
  const readInput = document.querySelector("#read").checked;

  console.log(readInput);

  addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
  displayBook();
});