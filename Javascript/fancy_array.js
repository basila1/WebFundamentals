// function symbol(->){}

  var arr= ["James", "Jill", "Jane", "Jack"];
  var style= "- >";
  var reversed= false;
  // for (var i = 0; i < array.length; i++) {
    // console.log( arr);
  function fancyArray() {
    if (reversed=== true) {
      for (var i =0; i< arr.length-1; i++){
        console.log(i + " " + style + " " +arr[arr.length-1-i]);
      }
    }else {
      for (var i = 0; i < arr.length; i++) {
        console.log(i + " " + style + " " +arr[i]);
      }
    }
}

fancyArray();
