// var win= Math.floor(Math.random()*50)+50;
var quarters= Math.floor(Math.random()*100)

// console.log(win);
// console.log(quarters);
// var num= Math.random()*100
//
// function random_chance(){
//   if (num < 1) {
//     console.log(win);
//
//   }
// }

function random_chance(quarters) {
  var winnings= 0
  console.log(quarters);
for (var i = 0; i < quarters; i++) {


  var win= Math.floor(Math.random()*50)+50;
  var num= Math.random()*100


  if (num<1) {
    winnings+=win
console.log("we won!");
  }

}
return winnings;
}

var win2 = random_chance(quarters)
console.log(win2);


// generate random # quarters
// function random_chance
// for every quarter we have:
//  check to see if we won (1/100 chance)
//  if we won, add winnings to our total winnings
// log our winnings
