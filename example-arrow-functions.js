 var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// const returnMe = (name) => name + '!';
// console.log(returnMe('Michael'));

// var person = {
//   name: 'Michael',
//   greet: function() {
// //    names.forEach(function (name) {   // doesn't work with anonymous function
//     names.forEach((name) => {         // but does with arrow function
//       console.log(this.name + ' says Hi to ' + name);
//     });
//   }
// };
//
// person.greet();


// Challenge

function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addStatement(1, 3), 'statement');
console.log(addStatement(9, 0), 'statement');
console.log(addExpression(1, 3), 'expression');
console.log(addExpression(9, 0));
