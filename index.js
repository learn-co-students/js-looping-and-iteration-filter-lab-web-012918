findMatching = (a,s) => {
  return a.filter(el =>
    el.toLowerCase() === s.toLowerCase()
  )
  // Filter, and find all elements that match the string (matched as lowercased).
}

fuzzyMatch = (a,s) => {
 return a.filter(el =>
   el.startsWith(s)
 )
 // Filter, and find all elements that start with the string.
}

matchName = (a,s) => {
  return a.filter(el =>
    el.name === s
  )
  // Filter, and find all objects who's name key matches the string.
}
