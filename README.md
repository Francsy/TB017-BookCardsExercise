# TB017-BookCardsExercise
Arrays, objects and DOM exercise

Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. También hay que darle algo de estilos con clases CSS correspondientes (es un buen ejercicio propenso a flexbox):

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
  
-------------------------
  Ejemplo estructura HTML de salida, generado todo desde Javascript:
  
  <section>
    <article>
        <h3>Title:Things Fall Apart</h3>
        <p>Author: Chinua Achebe</p>
        <p>Country: Nigeria</p>
        <img src="imagen" alt="">
        <p>Language: English</p>
        <p>Año: 1958</p>
    </article>
    <article>
        <h3>Title:Fairy tales</h3>
        <p>Author: Hans Christian Andersen</p>
        <p>Country: Denmark</p>
        <img src="imagen" alt="">
        <p>Language: English</p>
        <p>Año: 1958</p>
        <p>Pages: 784</p>
    </article>
    ...
    <article>
        ...
    </article>
</section>
