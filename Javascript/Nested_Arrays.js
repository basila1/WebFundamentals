//Multidimensional arrays

var nestedArr = [[1,2], [3,4]];
for(var i=0; i<nestedArr.length; i++){
    for(var j=0; j<nestedArr[i].length; j++){
        // notice that we are going inside the outer array
        // and now inside of the inner array
        console.log(nestedArr[i][j]);
    }
}

// this will log out...
// 1
// 2
// 3
// 4

console.log("~~~~~~~~~~~~~~~~");

//Given the following array, write a function called printEvens that console.logs all of the even numbers

function printEvens(nestedArr) {
  // var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];
  for (var i = 0; i < nestedArr.length; i++) {
    for (var j = 0; j < nestedArr[i].length; j++) {
      if (nestedArr[i][j] % 2 == 0) {
        console.log(nestedArr[i][j]);
      }
    }
  }
}
//tests
var test1 = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];
var test2 = [[2,2,2],[5,5,5],[6,6],[9,10,9,12]];
printEvens(test1);
console.log("~~~~~~~~~~~~~~~~");
printEvens(test2);

console.log("~~~~~~~~~~~~~~~~");

//Given the following array, write a function called sumTotal returns the sum of all numbers in the array

function sumTotal() {
  var nestedArray = [[1,2],[3,4],[5,6]];
  var sum = 0;
  for (var i = 0; i < nestedArray.length; i++) {
    for (var j = 0; j < nestedArray[i].length; j++) {
      // console.log(nestedArray[i][j]);
      sum = sum + nestedArray[i][j];
    }
  }
  console.log(sum);
}

sumTotal();
