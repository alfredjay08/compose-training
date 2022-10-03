//Composition

const getDoubleOf = (num) => num * 2;

const getHalfOf = (num) => num / 2;

const mirror = (doubleOf, halfOf) => (n) => halfOf(doubleOf(n));

const getMirror = mirror(getDoubleOf, getHalfOf);

console.log(getMirror(14));

// Currying

const greet = (name) => (age) => (address) => {
  return `Hello! My name is ${name}, I am ${age} years old and I lived in ${address}`;
};

const personToGreet = greet("Alicred Jay");
const personsAgeToGreet = personToGreet(23);
const personsAddressToGreet = personsAgeToGreet("Palawan");

console.log(personsAddressToGreet);
