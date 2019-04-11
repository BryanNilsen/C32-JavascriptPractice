// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const car = {
  make: "Ford",
  model: "Mustang",
  year: "2015",
  color: "red"
};

console.log("car object:", car);
console.log(`This car is a ${car.color} ${car.year} ${car.make} ${car.model}`);

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animalNames = [
  "Kippers",
  "Jack",
  "Gypsy",
  "Angus",
  "Seymour Bouts",
  "Sharky"
];

console.log("animal names array:", animalNames);

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
const mother = {
  name: "Sally",
  age: 35
};

const father = {
  name: "James",
  age: 36
};

const son = {
  name: "Billy",
  age: 8
};

const daughter = {
  name: "Suzie",
  age: 5
};

const familyMembers = [mother, father, son, daughter];

console.log(familyMembers);
console.log("The mother's name is", mother.name);

// creating family member objects directly within the familyMembers2 array
const familyMembers2 = [
  {
    name: "Eddie",
    age: 63
  },
  {
    name: "David",
    age: 64
  },
  {
    name: "Alex",
    age: 65
  },
  {
    name: "Michael",
    age: 59
  }
];

console.log("family members 2:", familyMembers2);
console.log(`${familyMembers2[0].name} is ${familyMembers2[0].age} years old.`);

// DOT NOTATION
// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
};

console.log(`the wardrobe height is`, wardrobe.height, `inches.`);
console.log(`the wardrobe manufacturer is`, wardrobe.manufacturer);
console.log(`the wardrobe contents are:`, wardrobe.contents);
console.log(`the wardrobe depth is`, wardrobe.depth, `inches.`);
console.log(`the wardrobe width is`, wardrobe.width, `inches.`);

wardrobe.material = `cedar`;

console.log(wardrobe);

// iterate using object keys and values
Object.entries(wardrobe).forEach(entry => {
  let key = entry[0];
  let value = entry[1];
  console.log(`the ${key} is ${value}`);
});

// Lightning Exercises
// Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.

const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
};

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(`stories:`, empireStateBuilding.stories);
console.log(`height:`, empireStateBuilding.height);
console.log(`square feet:`, empireStateBuilding.squareFeet);
console.log(`east-west length:`, empireStateBuilding.eastWestLength);
console.log(`north-south length:`, empireStateBuilding.northSouthLength);

// iterate using object keys and values
Object.entries(empireStateBuilding).forEach(entry => {
  console.log(`ESB entries - key: ${entry[0]}, value: ${entry[1]}`);
});

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const addressToLookup = `address`;
console.log(empireStateBuilding[addressToLookup]);

const constructionDateToLookup = `constructionDate`;
console.log(empireStateBuilding[constructionDateToLookup]);

const costToLookup = `cost`;
console.log(empireStateBuilding[costToLookup]);

const ownerToLookup = `owner`;
console.log(empireStateBuilding[ownerToLookup]);

const architectToLookup = `architect`;
console.log(empireStateBuilding[architectToLookup]);

// Lightning Exercise
// Examine the object below.

const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
    fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
    partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
};
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// console.log the arrays
const fulltimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;
console.log(`full time instructors:`, fulltimeInstructors);

const parttimeInstructors = nashvilleSoftwareSchool.instructors.partTime;
console.log(`part time instructors:`, parttimeInstructors);

// basic for loop to console.log each item in the array
for (let i = 0; i < fulltimeInstructors.length; i++) {
  console.log(`full timer:`, fulltimeInstructors[i]);
}

// forEach method applied to the array
parttimeInstructors.forEach(function(element) {
  console.log(`part timer:`, element);
});

// Lightning Exercise 2: Output only Andy and Zoe in the console.
// examples using array index location
console.log(`log just Andy:`, fulltimeInstructors[4]);
console.log(`log just Zoe:`, parttimeInstructors[0]);

// Practice: Accessing Property Values
// Given the following object...

const beatles = {
  albums: [
    "Abbey Road",
    "Sgt Peppers Lonely Heart's Club Band",
    "Revolver",
    "Magical Mystery Tour",
    "Something New"
  ],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
};

// Output the following value to the console.
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(
  `${beatles.members[1].name} was in the Beatles from ${
    beatles.history.formed
  } to ${beatles.history.disbanded}. He contributed heavily to the ${
    beatles.albums[3]
  } album.`
);
