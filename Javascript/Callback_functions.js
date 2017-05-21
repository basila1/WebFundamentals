// callback function is the function that is being passed to a higher order function and that callback function will be invoked within the higher order function

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function math(a, b, callBack) {
  return callBack(a, b);
}

console.log(math(5, 5, add));
console.log(math(4,1, subtract));

//as we start making additional functions that perform operations on
// two numbers we can pass them to the math function. So if we make a
// divide or multiply function we can call all of them just using the
// math function.
console.log("~~~~~~~~~~~~~~~~~~~~~~~");

//write a function called each which accepts two parameters: an array and a callback function. The each function should loop over the array passed to it and run the callback function on each element in it.

function each(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}
each([1,2,3,4], function(val){
  console.log(val);
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~");

//Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:

function map(arr1, fn) {
  for (var i = 0; i < arr1.length; i++) {
    fn(arr1[i]);
  }
}

map([1,2,3,4], function(value){
  console.log(value * 2);
});

//Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback

function reject(arr2, func) {
  for (var i = 0; i < arr2.length; i++) {
    func(arr2[i]);
  }
}

reject([1,2,3,4], function (value) {
  return value > 2;
});
