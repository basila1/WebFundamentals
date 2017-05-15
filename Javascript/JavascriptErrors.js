//Syntax Errors
var x = 'hello';

var wrongObj = {
    name: "foo"
    missingComma: true
};

//Rerernce Errors
amazing; // ReferenceError - does not exist in the global scope

function defineSomething(){
    var secret = "I'll never tell";
}

defineSomething();

secret; // ReferenceError - only exists in the scope of the defineSomething function

//Range Errors
function callMe(){
    callMe();
}

callMe(); // maximum call stack size exceeded. We will talk more about the call stack and recursion in a later section.

//catching and throwing Errors
//With our try/catch block, we saw that the code in the try block will move to the catch block if an error occurs inside of it. In our try/catch statements, we can add one more special keyword called finally. Inside of the finally block, code will execute regardless of an error being thrown.
try {
    thisDoesNotExist;
} catch(e) {
    console.log("The error is ", e);
}

try {
  if (Math.random() >= 0.5) {
    throw "Let's make an error!!!!"
  }
  console.log("nevermind we made it!");
  console.log("the random number is less than 0.5");
} catch(e) {
  console.log("this error is", e);
  console.log("the random number is greater than 0.5");
} finally {
  console.log("no matter what we will see this statement");
}
