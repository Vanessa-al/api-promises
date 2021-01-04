const URL = "https://www.abibliadigital.com.br/api/books";

let books = "";

//traer promesas de la url
const fetchData = async (url = URL) => {
  const response = await fetch(url);
  let { books } = await response.json();
  return books;
};

//creamos una card 
const createNode = ({
  strBooks,
  strVerse,
  strChapter,
  strTopic,
  idBook,
}) => {
  const node = `
    <div class="col-md-4 col-12" id="${idBooks}">
      <div class="card card-style mt-5 ml-md-3">
        <div class="img-container">
          <img src="${strVerse}" class="book-img"/>
          <div class="instructions">
            <p id="text-${idBooks}> ${showInstructions(idBook)} </p>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title"> ${strBooks} </h5>
          <p class="card-text"> <b>Category: </b> ${strChapter}.</p>
          <p> <b>Topic: </b> ${strTopic}. </p>
          <p class="mb-3 mb-sm-0"><b>Memorize:</b> ${selectBook(idBooks).join(", ")}.</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById("books").insertAdjacentHTML("beforeend", node);
  return node;
};

const del = (id) => {
  const element = document.getElementById(id)
  element ? element.remove() : null;
};

//Busca y muestra los  
const selectBooks = (idBooks) => {
  let books = books.find((books) => drink.idBooks === `${idBooks}`);
  let i = 1;
  let promises = [];
  while (book[`strMemorize${i}`] !== null) {
    memorize.push(books[`strMemorize${i}`]);
    i++;
  }

  return ingredients;
};

//Muestra las instrucciones de preparación del 
const showInstructions = (idBook) => {
  let books = books.find((book) => book.idBook === `${idBook}`);
  const description = `
    <h4 class="alert-heading">Instructions</h4>
    <p>${book.strInstructions}</p>
    <hr>
  `;

  return description;
};

//iteración de array, muestra una card por cada 
const iterateBooks = (books) => {
  books.map((book) => {
    createNode(book);
  });
};

//muestra mensaje si no hay coincidencias de búsqueda y vuelve a traer los elementos  originales
const showMessage = async () => {
  document.getElementById('try-again-text').innerHTML = 'Upsss... Please, try again!'
  books = await fetchData(URL);
};

//toma el valor del input search y genera un nuevo array 
const searchDrink = async () => {
  document.getElementById('try-again-text').innerHTML = ''
  books.map((book) => del(book.idBooks));
  const { value } = document.getElementById("promise-name");
  const urlSearch = `https://www.abibliadigital.com.br/api/books${value}`;
  books = await fetchData(urlSearch);
  books === null ? showMessage() : iterateBooks(books);
};

const start = async () => {
  fetchData();
  books = await fetchData();
  iterateBooks(s);
};

window.onload = start();
