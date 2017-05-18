var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
      console.log("WHAT IS THIS?", this)
        this.snacks.push(snack);
        return this;
    }
  }
}

// Using a for loop, console.log all of the numbers in the primeNumbers array.

function displayPrimeNumbers() {
  var primes = nestedData.innerData.numberData.primeNumbers;
  for (var i = 0; i < primes.length; i++) {
    console.log(primes[i]);
  }
}
displayPrimeNumbers();

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

// Using a for loop, console.log all of the even Fibonnaci numbers.

function displayEvenFiboNumbers() {
  var fiboNums = nestedData.innerData.numberData.fibonnaci;
  for (var i = 0; i < fiboNums.length; i++) {
    if (fiboNums[i] % 2 == 0) {
      console.log(fiboNums[i]);
    }
  }
}
displayEvenFiboNumbers();

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

// Console.log the value "second" inside the order array.


function orderArray() {
  var orders = nestedData.innerData.order;
  console.log(orders[1]);
}
orderArray();

// Invoke the addSnack function and add the snack "chocolate".

nestedData.innerData.addSnack("Chocolate")


// Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
