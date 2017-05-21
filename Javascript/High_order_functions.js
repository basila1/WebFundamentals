// Let's create a function called sendMessage that accepts a string and a function. The sendMessage function will return the result of the function being passed to it with the message as a parameter:


function sendMessage(message, fn) {
  return fn(message);
}

sendMessage("Hello World", console.log); // Hello World
// sendMessage("Hello World", alert); // Hello World is alerted
// sendMessage("What is your name?", prompt); // value from prompt is returned
// sendMessage("Do you like JavaScript?", confirm); // true or false is returned

sendMessage("Hello World", function(message){
    // message refers to the string "Hello World"
    console.log(message + " from a callback function!");
});  // Hello World from a callback function!

var myFunction = function(message){
    // message refers to the string "Hello World"
    console.log(message + " from a callback function!");
};

sendMessage("Hello World", myFunction);
