function findMatching(arr, name) {
  return arr.filter( function(el) {
    return el.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(arr, letters) {
  return arr.filter(function(el) {
    return letters === el.slice(0, letters.length)
  });
}

function matchName(arr, name) {
  return arr.filter(function(obj) {
    debugger
    return obj.name === name;
  })
}