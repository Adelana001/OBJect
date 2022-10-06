// const dog = {
//   name: "Bosky",
//   legs: 4,
//   color: "Blue",
//   age : 1,
//   dog.bark = function(){
//     return 'woof woof';
//   }
// };

// function getName() {
//   return dog.name;
// }
// function getLegs() {
//   return dog.legs;
// }
// function getColors() {
//   return dog.color;
// }
// function bark() {
//   return dog.bark;
// }

// function getAge(){
//     return dog.age
// }
// console.log(getName(dog));
// console.log(getLegs(dog));
// console.log(getColors(dog));
// console.log(getName(dog));

// dog.breed = "German Shepard";
// dog.getInfo = function () {
//   return ("The name of the Dog" + dog.Name )
// };
// console.log(dog.getInfo);

const dog = {};
dog.name = "bingo";
dog.legs = 4;
dog.color = "brown";
dog.age = 1;
dog.bark = function () {
  return "woof woof";
};
dog.getName = function () {
  return this.name;
};
dog.getLegs = function () {
  return this.legs;
};
dog.getColor = function () {
  return this.color;
};
dog.getAge = function () {
  return this.age;
};

dog.breed = "German Shepard";
dog.getInfo = function () {
  return dog.name + "" + dog.color + "" + dog.age + "";
};

console.log(dog.bark());
console.log(dog.getInfo());
