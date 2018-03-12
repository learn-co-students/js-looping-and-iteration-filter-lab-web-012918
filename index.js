// Code your solution in this file

function findMatching(arr, str) {
  return arr.filter(function (ele) {return ele.toLowerCase() === str.toLowerCase();});
}

function fuzzyMatch(arr, str) {
  return arr.filter(function (ele) {return ele.startsWith(str)});
}

function matchName(arr, str) {
  return arr.filter(function (ele) {return ele.name === str});
}
