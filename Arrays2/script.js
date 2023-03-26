const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

const currentYear = new Date().getFullYear();

//Checks if at least one person in the people array is an adult
const isAdult = people.some((person) => currentYear - person.year >= 18);

// Checks if all people in the people array are adults
const allAdults = people.every((person) => currentYear - person.year >= 18);

//Finds the first comment in the comments array with a specific id
const comment = comments.find((comment) => comment.id === 2039842);

//Finds the index of the first comment in the comments array with a specific id
const index = comments.findIndex((comment) => comment.id === 123523);

console.log({ isAdult, allAdults, comment, index });
