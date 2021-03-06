// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F

const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

const Intern = function(id, email, first_name, gender){
  this.id = id,
  this.email = email,
  this.first_name = first_name,
  this.gender = gender
};

const interns = [
new Intern(1, "mmelloy0@psu.edu", "Mitzi", "F"),
new Intern(2, "kdiben1@tinypic.com", "Kennan", "M"),
new Intern(3, "kmummer2@wikimedia.org", "Keven", "M"),
new Intern(4, "gmartinson3@illinois.edu", "Gannie", "M"),
new Intern(5,"adaine5@samsung.com","Antonietta","F")
];


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
let intern = interns.find(intern => intern.first_name === "Mitzi");
console.log(intern.first_name);

// Kennan's ID
intern = interns.find(intern => intern.first_name === "Kennan");
console.log(intern.id);

// Keven's email
intern = interns.find(intern => intern.first_name === "Keven");
console.log(intern.email);

// Gannie's name
intern = interns.find(intern => intern.first_name === "Gannie");
console.log(intern.first_name);

// Antonietta's Gender
intern = interns.find(intern => intern.first_name === "Antonietta");
console.log(intern.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
intern = interns.find(intern => intern.first_name === "Kennan");
intern.speak = function(){return `Hello, my name is ${this.first_name}`};

console.log(intern.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

intern = interns.find(intern => intern.first_name === "Antonietta");
intern.multiplyNums = function(num1, num2){return num1 * num2};

console.log(intern.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const Person = function(name, age){
  this.name = name,
  this.age = age
}
const parent = new Person('Susan', 70);
parent.child = new Person('George', 50);
parent.child.grandchild = new Person('Sam', 30);

Person.prototype.speak = function(){return `My name is ${this.name}`};

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name, parent.child.grandchild.age);
// Have the parent speak
console.log(parent.speak());
// Have the child speak
console.log(parent.child.speak());
// Have the grandchild speak
console.log(parent.child.grandchild.speak());