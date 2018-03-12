// Code your solution in this file

function findMatching(arr, str) {
  return arr.filter(function(el) {return el===str || el===str.toLowerCase();});
}

function fuzzyMatch(arr, str) {
  return arr.filter(function(el) {
    return el.includes(str) && el[0]===str[0];
  })
}

function matchName(arr, str) {
  return arr.filter(function(el) {
    return el.name === str;
  });
}
