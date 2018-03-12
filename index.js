// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(name){return name.toUpperCase() === string.toUpperCase();})
};

function fuzzyMatch(drivers, string){
  return drivers.filter(function(name){return name.toUpperCase().startsWith(string.toUpperCase());})
};

function matchName(drivers, string){
  return drivers.filter(function(driver){return driver.name.toUpperCase() === string.toUpperCase();})
};
