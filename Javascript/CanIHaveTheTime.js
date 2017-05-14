var HOUR= 7;
var MINUTE= 15;
var PERIOD= "PM"
var msg;
var moreve;
var alloft;

if (MINUTE > 30) {
  HOUR= HOUR+1;
  alloft= "almost";
} else{
  alloft="just after";
}
if (PERIOD== "AM") {
  moreve="morning";
}else {
  moreve="evening";
}
msg="it's "+ alloft+ " "+ HOUR + " in the " + moreve;

console.log(msg);
