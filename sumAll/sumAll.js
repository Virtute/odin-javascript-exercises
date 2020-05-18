const sumAll = function(first,second) {
  var finalSum = 0;
  if ( first < 0 || second < 0 || typeof first != "number" || typeof second != "number" ) {
    return "ERROR";
  };
  if ( first < second ) {
    var small = first;
    var big = second;
  } else {
    var small = second;
    var big = first;
  };
  for (let i=small;i<=big;i++) {
    finalSum += i;
  };
  return finalSum;
};

module.exports = sumAll
