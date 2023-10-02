// function Employee(name, salary, age) {
//   this.name = name;
//   this.salary = salary;
//   this.age = age;
// }

// Employee.prototype.profile = function () {
//   console.log(`
//     Name:${this.name}
//     Salary:${this.salary}
//     Age:${this.age}
//     `);
// };

// //class property and methods
// class Employee2 {
//   constructor(name, salary, age) {
//     this.name = name;
//     this.salary = salary;
//     this.age = age;
//   }
//   profile() {
//     console.log(`
//     Name:${this.name}
//     Salary:${this.salary}
//     Age:${this.age}
//     `);
//   }
// }

// // constrctor function
// const emp1 = new Employee("aaaa", 1000, 21);
// const emp2 = new Employee("bbbb", 1111, 20);

// // class constrctor
// const emp3 = new Employee2("ccc", 3333, 30);
// const emp4 = new Employee2("ddd", 444, 40);

// emp1.profile();
// emp2.profile();

// emp3.profile();
// emp4.profile();

class User {
  name;
  moblie;
  email;
  city;
  age;
  gender;
  profile() {
    console.log(`
    Name:${this.name}`);
  }
}
class Student extends User {
  rollNo;
}

class Teacher extends User {
  empNo;
  salary;
}

class Parent extends User {}

const s1 = new Student();
const t1 = new Teacher();
const p1 = new Parent();

console.log(s1);
console.log(t1);
console.log(p1);
