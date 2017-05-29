var HOUR= 8;
var MINUTE= 50;
var PERIOD= "AM"
var msg;

if (MINUTE > 30) {
  HOUR= HOUR+1;
}
if (PERIOD== "AM"){
  if (MINUTE> 30) {
    msg= "it's almost "+ HOUR + " in the morning";
  } else {
    msg= "it's just after "+ HOUR + " in the morning";

  }

} else if (PERIOD== "PM") {
  if (MINUTE> 30) {
    msg= "it's almost "+ HOUR + " in the evening";

  }else {
    msg= "it's just after "+ HOUR + " in the evening";


  }


}

console.log(msg);
