// the arguments object

// In Javascript function there is built in object called 'arguments' which provides the details
// about the function call.


//the argument object 
// -the argument is a built in object available in all the name and anonymous function.
// - the argument object give the details of a function.

// - arguments return the array

// function f1() {
//   console.log(arguments);

//   console.log("length: ", arguments.length);
//   console.log("callee: ", arguments.callee.name);
//   console.log("caller: ", arguments.callee.caller.name);
// }

// f1(10,20,30)


// function f2() {
//   f1(10, 20);
// }

//if javascript it is not mandatory pass arguments while calling function 
//machine number of parameters and arguments is not mandatory.

// the  values passed while calling a function are called argument.


// f2();



function f1() {
  console.log(arguments);
  var sum = 0;

  for (var n of arguments) {
    sum += n;
  }
  console.log("sum: ", sum);

  console.log("avg: ", sum / arguments.length);
}

f1(10, 20, 30, 40, 50);
// f1(10, 20, 30, 40, 50, 60, 70);
