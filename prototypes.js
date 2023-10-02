// const user = {
//   company: "topper",
//   country: "india",
//   profile() {
//     console.log(`Name:${this.name}
//     Company:${this.company}
//     Country:${this.country}
//     Salary:${this.salary}`);
//   },
// };

// const emp1 = {
//   name: "aaa",
//   age: 30,
//   salary: 1000,
// };

// const emp2 = {
//   name: "bbb",
//   age: 10,
//   salary: 2000,
// };

// const emp3 = {
//   name: "ccc",
//   age: 20,
//   salary: 500,
// };

// Object.setPrototypeOf(emp1, user);
// Object.setPrototypeOf(emp2, user);
// Object.setPrototypeOf(emp3, user);

// emp1.profile();
// emp2.profile();
// emp3.profile();

// to create by using create Object
// user = {
//   company: "topper",
//   country: "india",
//   profile() {
//     console.log(`Name:${this.name}
//     Company:${this.company}
//     Name:${this.salary}`);
//   },
// };

// const emp1 = Object.create(user);
// const emp2 = Object.create(user);
// const emp3 = Object.create(user);

// emp1.name = "aaaa";
// emp2.name = "bbbb";
// emp3.name = "cccc";

// emp1.salary = 1000;
// emp2.salary = 2000;
// emp3.salary = 555;

// emp1.profile();
// emp2.profile();
// emp3.profile();

//prototype by use constructor function

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}

Employee.prototype.company = "tata";

Employee.prototype.profile = function () {
  console.log(`Name:${this.name}
    Age:${this.age}
    Salary:${this.salary}
    `);
};

const emp1 = new Employee("aaaa", 10, 1000);
const emp2 = new Employee("bbbb", 20, 2000);
const emp3 = new Employee("ccc", 30, 500);

console.log(emp1.name);
console.log(emp2.name);
console.log(emp3.name);

console.log(emp1.company);
console.log(emp2.company);
console.log(emp3.company);

emp1.profile();
emp2.profile();
emp3.profile();

// to acces the  prototype by using dunder proto (__ptopt__)

console.log(typeof Object);

console.log(Object.getPrototypeOf(emp1));
console.log(emp1.__proto__);

console.log(Object.getPrototypeOf(Object.getPrototypeOf(emp1)));
console.log(emp1.__proto__.__proto__);

console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(emp1)))
);
console.log(emp1.__proto__.__proto__.__proto__);
