// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function (name) {return name.toUpperCase() == string.toUpperCase()});
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (name) {return name.toUpperCase().slice(0, string.length) == string.toUpperCase()})

}

function matchName(drivers, string){
  return drivers.filter(function (driver) {return driver["name"] == string})
}
