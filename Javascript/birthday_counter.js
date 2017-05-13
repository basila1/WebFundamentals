var daysUntilMyBirthday = 60;
var msg;

for (var i= 1; i<= 60; i++){
  msg= daysUntilMyBirthday-i;
  console.log(msg + " days unltl my birthday. Such a long time...");

  if (msg> 30) {
    console.log("i'm sad");
  }
  if (msg<= 30 && msg>=5) {
    console.log("i'm happy");
  }
  if (msg< 5) {
    console.log("scream it");
  }
  if (msg === 0){
    console.log("Happy Birthday!");
  }
}
