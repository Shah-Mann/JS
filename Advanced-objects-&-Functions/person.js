// Prototypal Inheritance

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName} is ${this.position}.`;
  }
  getYearsLeft() {
    return `You gave ${65 - this.age} years Left`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, marks, age, likes) {
    super(firstName, lastName, age, likes);
    this.marks = marks;
  }
  updateMarks(change) {
    this.marks += change;
  }
  getBio() {
    const result = this.marks >= 70 ? "passing" : "failing";
    return `${this.firstName} is ${result} in the class`;
  }
}

const me = new Employee("Mann", "Shah", 87, "New to JS", []);
me.fullName = "Vraj Rakesh ";
console.log(me.getBio());

// const me = new Student("Mann", "Shah", 87, 21, []);
// me.fullName = "Vraj Rakesh";
// console.log(me.getBio());
// me.updateMarks(-55);
// console.log(me.getBio());

// const me = new Employee("Mann", "Shah", 21, "New to JSON", [
//   "Programming",
//   "Biking",
// ]);
// // console.log(me);
// me.setName("Shah Mann");
// console.log(me.getBio());
// console.log(me.getYearsLeft());

// const person2 = new Person("Clancey", "Turner", 51);
// console.log(person2.getBio());
