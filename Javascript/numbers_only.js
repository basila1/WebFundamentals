// make variable equals array
// function numbers only
// forloop
//if/else statement to diffrentiate numbers from strings
//return newarray

var arr= [1, "apple", -3, "orange", 0.5];
var arrnew=[];

function numbers_only(){
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arrnew.push(arr[i]);
    }
  }
  console.log(arrnew);
  // return arrnew;
}

numbers_only();

// function remove_num(){
//   for (var i = 0; i < arrnew.length; i++) {
//     arrnew.pop[arr[arrnew.length]];
//   }
//   // console.log(arrnew);
// console.log(arrnew);
// }
// remove_num();
