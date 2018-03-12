function findMatching (drivers, name){
  return drivers.filter(function (driver){
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driver) {
    return driver.slice(0, lengthOfName) === partialName;
  });
}

function matchName (arrOfObj, stringName) {
  return arrOfObj.filter(function (obj){
    return obj.name === stringName;
  })
}
