function findMatching(drivers, name) {
  let newArray = [];
  for (const driver of drivers) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      newArray.push(driver)
    }
  }
  return newArray;
}

function fuzzyMatch(drivers, name) {
  let newArray = [];
  for (const driver of drivers) {
    let count = name.length
    if (driver.slice(0, count) === name) {
      newArray.push(driver)
    }
  }
  return newArray;
}

function matchName(drivers, name) {
  let newArray = [];
  for (const driver of drivers) {
    if (driver.name === name) {
      newArray.push(driver)
    }
  }
  return newArray;

}
