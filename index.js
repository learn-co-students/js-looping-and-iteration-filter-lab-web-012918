// Code your solution in this file
function findMatching(drivers, name) {
  const newArray = drivers.filter(function (driverName) {return driverName.toLowerCase() === name.toLowerCase()});
  return newArray
}
function fuzzyMatch(drivers, firstLetters) {
  const newArray = drivers.filter(function (name) {return name.startsWith(firstLetters)});
  return newArray
}
function matchName(drivers, name) {
  const newArray = drivers.filter(function (driver) {return driver.name === name});
  return newArray
}
