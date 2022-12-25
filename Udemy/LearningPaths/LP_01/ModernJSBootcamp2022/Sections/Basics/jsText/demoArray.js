function demoArray1() {
    console.group("Create and Access")

    let emptyArray = []
    console.log(`$ let emptyArray = []`)
    console.log(`\temptyArray = `, emptyArray)

    let stringArray = ["String1", "String2", "String3"]
    console.log(`$ let stringArray = ["String1", "String2", "String3"]`)
    console.log(`\tstringArray = `, stringArray)

    let numberArray = [1, 2, 3, 4, 9, 13]
    console.log(`$ let numberArray = [1, 2, 3, 4, 9 ,13]`)
    console.log(`\tnumberArray = `, numberArray)

    let someArray = ["string", 123, "1324", true, null, undefined, NaN, Infinity, 0, 'c']
    console.log(`$ let someArray = [ "string", 123, "1324", true, null, undefined, NaN, Infinity, 0, 'c']`)
    console.log(`\tsomeArray = `, someArray)

    console.log(`- looping through someArray`)
    someArray.forEach((element, index) => {
        console.log(`\tindex\t\t`, index,`
        element\t\t`, element,`
        someArray[${index}]\t`, someArray[index])
        // console.log(`\tindex\t\t`, index)
        // console.log(`\telement\t\t`, element)
        // console.log(`\tsomeArray[${index}]\t`, someArray[index])
    });

    console.groupEnd()
}

function demoArray2() {
    console.group("Compare")


    let someArray = ['red', 'green', 'blue']
    console.log(`$ let someArray = ['red', 'green', 'blue']`)
    console.log(`\tsomeArray = `, someArray)

    let newArray = ['red', 'green', 'blue']
    console.log(`$ let newArray = ['red', 'green', 'blue']`)
    console.log(`\tnewArray = `, newArray)

    console.log(`$ someArray == newArray\n\t${someArray == newArray}`)

    console.groupEnd()
}

function demoArray3() {
    console.group("Push & Pop")

    const someArray = ["string", 123, "1324", true, null, undefined, NaN, Infinity, 0, 'c']
    console.log(`$ const someArray = [ "string", 123, "1324", true, null, undefined, NaN, Infinity, 0, 'c']`)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])

    console.log('- Push')

    let pushLength = someArray.push("New Element")
    console.log(`\t$ let pushLength = someArray.push("New Element")`)
    console.log('\tpushLength = ', pushLength)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])

    someArray[someArray.length] = 'Another New Element'
    console.log(`\t$ someArray[someArray.length] = 'Another New Element'`)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])

    console.log('- Pop')
    let popedElement = someArray.pop()
    console.log(`\t$ let popedElement someArray.pop()`)
    console.log('\tpopedElement = ', popedElement)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])


    someArray[someArray.length - 1] = undefined
    console.log(`\t$ someArray[someArray.length] = undefined`)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])

    someArray[someArray.length - 1] = null
    console.log(`\t$ someArray[someArray.length] = null`)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])

    console.groupEnd()
}

function demoArray4() {
    console.group("Shift & Unshift")

    const someArray = ["string", 123, "1324", true, null, undefined, NaN, Infinity, 0, 'c']
    console.log(`\t$ const someArray = [ "string", 123, "1324", true, null, undefined, NaN, Infinity, 0, 'c']`)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])

    console.log('- Unshift')

    let unshiftResult = someArray.unshift('New Element')
    console.log(`\t$ let unshiftResult = someArray.unshift('New Element')`)
    console.log('\tunshiftResult = ', unshiftResult)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[0] = `, someArray[0])

    console.log('- Shift')
    let shiftedElement = someArray.shift()
    console.log(`\t$ let shiftedElement = someArray.shift()`)
    console.log('\tshiftedElement = ', shiftedElement)
    console.log(`\tsomeArray.toString() = `, someArray.toString())
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.length = `, someArray.length)
    console.log(`\tsomeArray[${someArray.length - 1}] = `, someArray[someArray.length - 1])

    console.groupEnd()
}

function demoArray5() {
    console.group("Concat")

    let someArray = ['red', 'green', 'blue']
    console.log(`$ let someArray = ['red', 'green', 'blue']`)
    console.log(`\tsomeArray.toString() = `, someArray.toString())

    let secondArray = ['Cat', 'Dog', 'Tiger']
    console.log(`$ let secondArray = ['Cat', 'Dog', 'Tiger']`)
    console.log(`\tsecondArray.toString() = `, secondArray.toString())

    let thirdArray = someArray.concat(secondArray), fourthArray = secondArray.concat(someArray)
    console.log('$ let thirdArray = someArray.concat(secondArray), fourthArray = secondArray.concat(someArray)')
    console.log('\tsomeArray.toString() = ', someArray.toString())
    console.log('\tsecondArray.toString() = ', secondArray.toString())
    console.log('\tthirdArray.toString() = ', thirdArray.toString())
    console.log('\tfourthArray.toString() = ', fourthArray.toString())

    console.groupEnd()
}

function demoArray6() {
    console.group("Reverse - Mutating")

    let someArray = ['red', 'green', 'blue']
    console.log(`$ let someArray = ['red', 'green', 'blue']`)
    console.log(`\tsomeArray.toString() = `, someArray.toString())

    let newArray = someArray.reverse()
    console.log(`$ let newArray = someArray.reverse()`)
    console.log(`\tnewArray.toString() = `, newArray.toString())
    console.log(`\tsomeArray.toString() = `, someArray.toString())

    console.log(`$ someArray == newArray\tis ${someArray == newArray}`)

    console.groupEnd()
}

function demoArray7() {
    console.group("Join")

    let someArray1 = ['red', 'green', 'blue']
    console.log(`$ let someArray1 = ['red', 'green', 'blue']`)
    console.log(`\tsomeArray1.toString() = `, someArray1.toString())

    let joinedArray = someArray1.join()
    console.log(`$ let joinedArray = someArray1.join()`)
    console.log(`\tjoinedArray = `, joinedArray)
    console.log(`\tsomeArray1 = `, someArray1)
    console.log(`\tsomeArray1.toString() = `, someArray1.toString())

    joinedArray = someArray1.join('')
    console.log(`joinedArray = someArray1.join('')`)
    console.log(`\tjoinedArray = `, joinedArray)
    console.log(`\tsomeArray1 = `, someArray1)
    console.log(`\tsomeArray1.toString() = `, someArray1.toString())

    joinedArray = someArray1.join(' ')
    console.log(`joinedArray = someArray1.join(' ')`)
    console.log(`\tjoinedArray = `, joinedArray)
    console.log(`\tsomeArray1 = `, someArray1)
    console.log(`\tsomeArray1.toString() = `, someArray1.toString())

    console.groupEnd()
}

function demoArray8() {
    console.group("IndexOf & Includes")

    let someArray = ['red', 'green', 'blue']
    console.log(`$ let someArray = ['red', 'green', 'blue']\n\tsomeArray = `, someArray)

    console.log(`$ someArray.includes('red')\n\t${someArray.includes('red')}`)
    console.log(`$ someArray.indexOf('red')\n\t${someArray.indexOf('red')}`)

    console.log(`$ someArray.includes('dog')\n\t${someArray.includes('dog')}`)
    console.log(`$ someArray.indexOf('dog')\n\t${someArray.indexOf('dog')}`)

    console.groupEnd()
}
