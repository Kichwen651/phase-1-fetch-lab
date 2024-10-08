function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
   return fetch('https://anapioficeandfire.com/api/books', renderBooks)
   .then ((resp) => resp.json())
   .then((data) => renderBooks(data))
    }


function renderBooks(books) {

  const main = document.querySelector('main');
  books.forEach(book => {
    const h1 = document.createElement('h1');
    h1.innerHTML = book.name;
    main.appendChild(h1);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// function fetchBooks
// const myList = document.querySelector("ul");
// const myRequest = new Request("products.json");

// fetch('https://anapioficeandfire.com/api/books')
//   .then((response) => response.json())
//   .then((data) => {
//     for (const product of data.products) {
//       const listItem = document.createElement("li");
//       listItem.appendChild(document.createElement("strong")).textContent =
//         product.Name;
//       listItem.append(` can be found in ${product.Location}. Cost: `);
//       listItem.appendChild(document.createElement("strong")).textContent =
//         `£${product.Price}`;
//       myList.appendChild(listItem);
//     }
//   })
//   .catch(console.error);
