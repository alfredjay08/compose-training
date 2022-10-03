const getDoubleOf = (num) => num * 2;

const getHalfOf = (num) => num / 2;

const mirror = (doubleOf, halfOf) => (n) => halfOf(doubleOf(n));

const getMirror = mirror(getDoubleOf, getHalfOf);

console.log(getMirror(14));
