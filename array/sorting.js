const notes = [
  {
    title: "My next topic",
    body: "Part-2",
  },
  {
    title: "Fav movie",
    body: "ABC",
  },
  {
    title: "Education",
    body: "IT",
  },
];

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes);
console.log(notes);
// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toUpperCase() === noteTitle.toUpperCase();
//   });
// };

// const filterednotes = notes.filter(function (note, index) {
//   const isTitleMatch = note.title.toLowerCase().includes("ti");
//   const isBodyMatch = note.title.toLowerCase().includes("it");
//   return isTitleMatch || isBodyMatch;
// });
