//creating an object that has a key and the value for that key is another objec

var schools = {
  SantaClaraUniversity: {
    address: "500 El Camino Real, Santa Clara, CA, 95053",
    phone: "123123123",
    dateEstablished: "24 August 1800"
  }
};

//Now to access an object within an object, we can use dot notation just like in objects that are not nested:

var getObject = schools.SantaClaraUniversity;
console.log(getObject);

console.log(getObject.address);

//an object with an array as the value:

var InstructorData = {
  name: "Basila",
  hobbies: ["dancing", "swimming", "coding"]
};

console.log(InstructorData.hobbies[0]); //returns dancing
InstructorData.hobbies.push("movies");
console.log(InstructorData.hobbies);

//objects and arrays
var DanceData = {
  name: "Basila",
  additionalData: {
    instructor: true,
    favHobbies: ["dancing", "swimming", "coding"],
    moreDetails: {
      numberOfSiblings: 1,
      isYoungest: false,
      hometown: {
        city: "Sunnyvale",
        state: "CA",
      },
      citiesLivedIn: ["Seattle", "Providence", "New York"]
    }
  }
};

console.log(DanceData.name);
console.log(DanceData.additionalData.favHobbies[1]);
console.log(DanceData.additionalData.moreDetails);
console.log(DanceData.additionalData.moreDetails.hometown.city);
console.log(DanceData.additionalData.moreDetails.citiesLivedIn[2]);

//Accessing and Setting values in nested objects
var programmingLanguages = {
  java: {
    yearCreated: 1995,
    creator: "James Gosling"
  },
  javascript: {
    yearCreated: 1995,
    creator: "Brendon Eich"
  }
}

  //use bracket notation where the key is the nameOfLanguage that is being passed to the function.
function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage) {
  programmingLanguages[nameOfLanguage] = {
    yearCreated: yearLanguageCreated,
    creator: creatorOfLanguage
  }
}

addProgrammingLanguage("ruby", 1995, "Yukihiro Matsumoto");
console.log(programmingLanguages);
