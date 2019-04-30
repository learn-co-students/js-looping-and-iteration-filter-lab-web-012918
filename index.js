// Code your solution in this file
function findMatching(arr, string){
  return arr.filter(function(name){return name.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(arr, string){
  length = string.length
  return arr.filter(function(name){return name.slice(0, length) === string})
}

function matchName(arr, string){
  return arr.filter(function(obj){
    
    return obj['name'] === string})
}
