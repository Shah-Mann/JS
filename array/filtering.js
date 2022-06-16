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

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toUpperCase() === noteTitle.toUpperCase();
  });
};

const filterednotes = notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLowerCase().includes("ti");
  const isBodyMatch = note.title.toLowerCase().includes("it");
  return isTitleMatch || isBodyMatch;
});

console.log(filterednotes);
// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toUpperCase() === noteTitle.toUpperCase();
//   });
//   return notes[index];
// };

// const note = findNote(notes, "education");
// console.log(note);
