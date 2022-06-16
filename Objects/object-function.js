let myBook = {
  tile: "1984",
  author: "Newton",
  pagecount: 456,
};

//console.log(`${myBook.tile} by ${myBook.author}`);

let myBook2 = {
  tile: "My biography",
  author: "Sardar Patel",
  pagecount: 845,
};

let getSummary = function (book) {
  console.log(`${book.tile} by ${book.author} is ${book.pagecount} pages long`);
};

getSummary(myBook);
getSummary(myBook2);
