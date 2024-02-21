// https://www.codewars.com/kata/567bf4f7ee34510f69000032/
//
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
//
// String.prototype.digit = function() {
//     return false;
//   };

//RegEx
String.prototype.digit = function () {
  return /^[0-9]$/.test(this);
};

//no RegEx
String.prototype.digit = function () {
  if (this.length !== 1) {
    return false;
  }
  return this.charCodeAt(0) >= 48 && this.charCodeAt(0) <= 57;
};
