// Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. También hay que darle algo de estilos con clases CSS correspondientes (es un buen ejercicio propenso a flexbox):

const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }]

for (let i = 0; i < books.length; i++) {
  let bookArticle = document.createElement('article');
  bookArticle.setAttribute("class", "bookArticle");
  document.getElementById('bookSection').appendChild(bookArticle);

  let bookTitle = document.createElement('h3');
  bookTitle.setAttribute("class", "bookTitle")
  bookArticle.appendChild(bookTitle);
  bookTitle.innerHTML = books[i].title;

  let author = document.createElement('p');
  author.setAttribute('class', 'author');
  bookArticle.appendChild(author);
  author.innerHTML = `Autor: ${books[i].author}`;

  let country = document.createElement('p');
  country.setAttribute('class', 'country');
  bookArticle.appendChild(country)
  country.innerHTML = `País: ${books[i].country}`;

  let bookImage = document.createElement('img');
  bookImage.setAttribute('class', 'bookImage')
  bookArticle.appendChild(bookImage)
  bookImage.setAttribute('src', books[i].imageLink);

  let language = document.createElement('p');
  bookArticle.appendChild(language);
  language.setAttribute('class', 'language');
  language.innerHTML = `Lengua: ${books[i].language}`;

  let year = document.createElement('p')
  bookArticle.appendChild(year)
  year.setAttribute('class', 'year')
  year.innerHTML = `Año: ${books[i].year}`

  let pages = document.createElement('p')
  bookArticle.appendChild(pages)
  pages.setAttribute('class', 'pages')
  pages.innerHTML = `Páginas: ${books[i].pages}`

  let bookLink = document.createElement('a');
  bookArticle.appendChild(bookLink)
  bookLink.setAttribute('class', 'bookLink')
  bookLink.setAttribute('href', books[i].link)
  bookLink.setAttribute('target','_blank')
  bookLink.innerHTML = 'Wikipedia'
}