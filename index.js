// Code your solution here

function findMatching(drivers, string) {
    
    // filter function enters into array and filters results
    
    const result = drivers.filter(drivers => drivers === string || drivers === string.toLowerCase())

    return result
}

function fuzzyMatch(drivers, string) {

    // fliter here uses the more basic form without { } brackets because we onlly have one condition to fulfill drivers[0] === string
    const result = drivers.filter(drivers => drivers[0] === string[0])

    return result
}

function matchName(drivers, string) {

    // we can use the same format or a shorter one like this 
    const result = drivers.filter(drivers => drivers.name === string)

    return result

}
