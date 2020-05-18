const removeFromArray = function(array, ...toRemove) {
  for (let i = 0; i < toRemove.length; i++) {
    var arrayCopy = array;
    if ( arrayCopy.includes(toRemove[i])) {
      arrayCopy.splice(arrayCopy.indexOf(toRemove[i]), 1);
    };
  };
  return arrayCopy;
}

module.exports = removeFromArray
