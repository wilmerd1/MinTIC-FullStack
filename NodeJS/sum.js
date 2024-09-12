function sum(a, b) {
  return a + b;
}

//module.exports = sum; // CommonJS module system

//commonJs Export
module.exports = {
  sum: sum
};