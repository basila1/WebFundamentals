var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

//Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

function displayCities() {
  var cityArray = instructorData.additionalData.moreDetails.citiesLivedIn;
  for (var i = 0; i < cityArray.length; i++) {
    console.log(cityArray[i]);
  }
}
displayCities();

//Write a function called displayHometownData that console.logs all the values inside of the hometown object

function displayHometownData() {
  var hometownArray = instructorData.additionalData.moreDetails.hometown;
  for(var key in hometownArray){
        console.log(hometownArray[key]);
    }
}
displayHometownData();

//Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

function addDetail(key, value) {
  var detailsArray = instructorData.additionalData.moreDetails;
  detailsArray[key] = value;
  return detailsArray;
}
addDetail("isHilarious", true);
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);

console.log(instructorData.additionalData.moreDetails);

//write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object
function removeDetail(key) {
  var detailsArray = instructorData.additionalData.moreDetails;
  var valueToBeRemoved = detailsArray[key];
  delete detailsArray[key];
  return detailsArray;
}

removeDetail('citiesLivedIn');
console.log(instructorData.additionalData.moreDetails);
