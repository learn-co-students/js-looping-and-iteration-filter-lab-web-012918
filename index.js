// Code your solution in this file

function findMatching(array, string) {
  return array.filter(function(el) {
    return el.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  return array.filter(function(el) {
    return el.toLowerCase().indexOf(string.toLowerCase()) > -1 && el.toLowerCase()[0] === string.toLowerCase()[0];
  })
}

function matchName(array, string) {
  return array.filter(function(el){
    return el.name.toLowerCase() === string.toLowerCase();
  })
}
