// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(name) { return name.toUpperCase() === string.toUpperCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name) { return name.slice(0, 1) === string.slice(0, 1); });
}

function matchName(drivers, string) {
  return drivers.filter(function(driverName) { return driverName.name === string; });
}
