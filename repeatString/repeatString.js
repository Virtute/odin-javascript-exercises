const repeatString = function(string, times) {
  if (times < 0) return 'ERROR';
  var printString = "";
  for (let i=0; i<times; i++) {
    printString += string;
  };
  return(printString);
};

module.exports = repeatString
