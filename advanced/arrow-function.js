const square = (num) => num * num;

const squareLomg = (num) => {
  return num * num;
};

console.log(square(5));

const people = [
  {
    name: "Mann",
    age: 21,
  },
  {
    name: "abc",
    age: 15,
  },
  {
    name: "xyz",
    age: 20,
  },
];

const under20 = people.filter(function (person) {
  return person.age < 20;
});

const under21 = people.filter((person) => person.age < 21);

console.log(under20);

console.log(under21);

const person = people.find((person) => person.age === 20);
console.log(person.name);
