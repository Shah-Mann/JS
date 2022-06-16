const notes = ["Note 1", "note2", "note3"];

notes[2] = "This is new 3rd";

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});
console.log(notes.length);
console.log(notes);

for (let count = 0; count <= 200; count++) {
  console.log(count);
}

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count]);
}
