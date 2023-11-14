function findMatching(names, string) {
    return names.filter((name) => name.toUpperCase() === string.toUpperCase())
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
console.log(findMatching(drivers, 'Bobby'))


function fuzzyMatch(names, string) {
    return names.filter((name) => name.startsWith(string)) 
}

function matchName(drivers, string) {
    return drivers.filter((driver) => driver.name ===  string)
}