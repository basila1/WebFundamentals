function ForABillion(daystobill, amount){
  var penny= 0.01;
  var days= 0

  for (var i = 2; i <= daystobill; i++) {
    penny = penny*2;
  }
  // console.log(penny);
  console.log("He earned $" + penny + " on day 30");

  for (var i = 0.01; i<= amount; i*=2) {
    days= days+ 1
  }

  // console.log(days);
  console.log("It would take the servant "+ days + " days to earn " + amount);
}

var daystobill= 30;
var amount= 10000;
ForABillion(daystobill, amount);
