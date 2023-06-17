// Code your solution here

function findMatching(drivers, string) {
    
    const result = drivers.filter(drivers => {
        return drivers === string || drivers === string.toLowerCase()})

    return result
}

function fuzzyMatch(drivers, string) {

    const result = drivers.filter(drivers => drivers[0] === string[0])

    return result
}

function matchName(drivers, string) {

    const result = drivers.filter(drivers => {
        return drivers.name === string})

    return result

}
