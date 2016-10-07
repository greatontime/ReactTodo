// function add (a,b) {
//   return a+b;
// }
// console.log(add(10,20));
//
// var toAdd = [9,5,20];
// console.log(add(...toAdd))
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Great'];
// var final = [...groupB,3,...groupA];
// console.log(final)

var person = ['Great',4];
var person2 = ['Kao',1];

function greet (name,age) {
  console.log('Hi '+name+', you are '+age);
}
greet(...person);
greet(...person2);

var name = ['Nathakorn','Nathaporn'];
var final = ['Pathomphong', ...name];

final.forEach(function(name){
  console.log('Hi '+ name);
})
