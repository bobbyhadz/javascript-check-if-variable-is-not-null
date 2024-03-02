// EXAMPLE 1 - Check if a Variable is Not NULL in JavaScript

const a = 'hello';

// ✅ check if a variable is NOT null
if (a !== null) {
  // 👇️ this runs
  console.log('the variable is NOT null');
} else {
  console.log('the variable is null');
}

// // -------------------------------------

// // ✅ check if a variable is NOT null and undefined
// if (a != null) {
//   // 👇️ this runs
//   console.log('the variable is NOT null and undefined');
// } else {
//   console.log('The variable is null or undefined');
// }

// // -------------------------------------

// // ✅ check if a variable has been declared (without errors)

// if (typeof abcd !== 'undefined') {
//   console.log('The variable has been declared');
// } else {
//   // 👇️ this runs
//   console.log('The variable is undeclared or set to undefined');
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a variable is NOT nullish in JavaScript

// const a = 'hello';

// // ✅ check if a variable is NOT null and undefined
// if (a != null) {
//   // 👇️ this runs
//   console.log('the variable is NOT null and undefined');
// } else {
//   console.log('The variable is null or undefined');
// }

// // -------------------------------------

// // ✅ check if a variable is NOT nullish (null and undefined)

// if (a !== null && a !== undefined) {
//   // 👇️ this runs
//   console.log('the variable is NOT null and undefined');
// } else {
//   console.log('The variable is null or undefined');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a variable has been declared in JavaScript

// if (typeof abcd !== 'undefined') {
//   console.log('The variable has been declared');
// } else {
//   // 👇️ this runs
//   console.log('The variable is undeclared or set to undefined');
// }
