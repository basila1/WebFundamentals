function printRange(start,end,skip){
  // if cond exists:
  // console.log(skip);
  if (skip) {
    for (var i = start; i < end; i+= skip) {
      console.log(i);
    }
  } else {
    for (var i = start; i < end; i++) {
      console.log(i);
    }
  }
  if (!end) {
    for (var i= 0; i< start; i++) {
      console.log(i);
    }
  }
}
printRange(2,10,2);
