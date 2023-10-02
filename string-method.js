// //  !Create JavaScript Strings

// // In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.

// // Single quotes: 'Hello'
// // Double quotes: "Hello"
// // Backticks: `Hello`

// //strings example

// //! -----------------------------------------------------------------------------------------------------


// const result = `The names are ${name} and ${name1}`;

// console.log(result);

// //! JavaScript String Methods

// // Here are the commonly used JavaScript String methods:

// //! 				charAt(index)                    	returns the character at the specified index
// const str10 = "Here are the commonly used JavaScript String method";
// console.log(str10.charAt(3));
// console.log(str10.charAt(13));


// //!                charCodeAt(index)                    return the character code return character code value
// const sentence = "The quick brown fox jumps over the lazy dog.";

// const index = 4;

// console.log(
//   `The character code ${sentence.charCodeAt(
//     index
//   )} is equal to ${sentence.charAt(index)}`
// );

// //! 				concat()                           	joins two or more strings
// const name = "Peter";
// const name1 = "Jack";

// console.log(name.concat(name1));

// //! 				replace()                          	replaces a string with another string

// console.log("foo".replace("f", "$1"));

// //! 				split()                             converts the string to an array of strings

// const str = "The quick brown fox jumps over the lazy dog.";
// const output = str.split(" ");
// console.log(output[3]);

// //! 				substr(start, length)              returns a part of a string

// console.log(str.substr(4, 10));
// console.log(str.substr(4));

// //! 				substring(start,end)          	   returns a part of a string

// console.log(str.substring(4, 10));
// console.log(str.substring(4));

//! 				slice(start, end)                  returns a part of a string
const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(4, 10));
// console.log(str.slice(4));

//! 				toUpperCase()                       returns the passed string in upper case

// const text1 = "hello";
// console.log(text1.toUpperCase());

//! 				toLowerCase()                       returns the passed string in lower case

// const text = "WELCOME";

// console.log(text.toLowerCase());

//! 				trim()                             removes whitespace from the strings

// const spaces = " BHAGWAN ";

// console.log(spaces);
// console.log(spaces.trimStart());
// console.log(spaces.trimEnd());
// console.log(spaces.trim());

//! 				includes()                       searches for a string and returns a boolean value

// const str1 = "To be, or not to be, that is the question.";

// console.log(str1.includes("To be")); // true
// console.log(str1.includes("question")); // true
// console.log(str1.includes("nonexistent")); // false
// console.log(str1.includes("To be", 1)); // false
// console.log(str1.includes("TO BE")); // false
// console.log(str1.includes("")); // true

//! 				search()                        searches for a string and returns a position of a match
// const str2 = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;

// console.log(str2.search(re)); // returns 4, which is the index of the first capital letter "J"

// console.log(str2.search(reDot)); // returns -1 cannot find '.' dot punctuation

// =======================================================================================================
//! JavaScript String Objects

// You can also create strings using the new keyword. For example,
// -------------------------------------------------------------------------------------------------------
// const a = 'hello';
// const b = new String('hello');

// console.log(a); // "hello"
// console.log(b); // "hello"

// console.log(typeof a); // "string"
// console.log(typeof b); // "object"

// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"

//!  ========================================================================================================

// JavaScript String() Function

// The String() function is used to convert various data types to strings. For example,

// const a = 225; // number
// const b = true; // boolean

// //converting to string
// const result1 = String(a);
// const result2 = String(b);

// console.log(result1); // "225"
// console.log(result2); // "true"
