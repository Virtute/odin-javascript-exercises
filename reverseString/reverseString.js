const reverseString = function(string) {
  string = string.split("");
  var returnString = "";
  for (let i = 1; i <= string.length; i++) {
    returnString += string[string.length - i];
  }
  return returnString;
}

module.exports = reverseString
