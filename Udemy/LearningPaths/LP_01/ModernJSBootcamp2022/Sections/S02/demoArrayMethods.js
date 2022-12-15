function demoArrayMethods1() {
    console.group("Slice")

    let someArray = ['red', 'green', 'blue', 'orange', 'yellow', 'black']
    console.log(`$ let someArray = ['red', 'green', 'blue', 'orange', 'yellow', 'black']`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    // console.log(`\tsomeArray = `, someArray)

    let newArray1 = someArray.slice()
    console.log(`$ let newArray1 = someArray.slice()`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    // console.log(`\tsomeArray = `, someArray)
    console.log(`\tnewArray1.toString() = ${newArray1.toString()}`)
    // console.log(`\tnewArray1 = `, newArray1)

    console.log(`\t\tsomeArray == newArray1\tis ${someArray == newArray1}`)

    newArray1 = someArray.slice(2)
    console.log(`$ newArray1 = someArray.slice(2)`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    // console.log(`\tsomeArray = `, someArray)
    console.log(`\tnewArray1.toString() = ${newArray1.toString()}`)
    // console.log(`\tnewArray1 = `, newArray1)

    newArray1 = someArray.slice(3, 5)
    console.log(`$ newArray1 = someArray.slice(3, 5)`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    // console.log(`\tsomeArray = `, someArray)
    console.log(`\tnewArray1.toString() = ${newArray1.toString()}`)
    // console.log(`\tnewArray1 = `, newArray1)

    newArray1 = someArray.slice(-1)
    console.log(`$ newArray1 = someArray.slice(-1)`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    // console.log(`\tsomeArray = `, someArray)
    console.log(`\tnewArray1.toString() = ${newArray1.toString()}`)
    // console.log(`\tnewArray1 = `, newArray1)

    newArray1 = someArray.slice(-1, -3)
    console.log(`$ newArray1 = someArray.slice(-1, -3)`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    // console.log(`\tsomeArray = `, someArray)
    console.log(`\tnewArray1.toString() = ${newArray1.toString()}`)
    // console.log(`\tnewArray1 = `, newArray1)

    newArray1 = someArray.slice(-3, -1)
    console.log(`$ newArray1 = someArray.slice(-3, -1)`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    // console.log(`\tsomeArray = `, someArray)
    console.log(`\tnewArray1.toString() = ${newArray1.toString()}`)
    // console.log(`\tnewArray1 = `, newArray1)
    
    console.groupEnd()
}

function demoArrayMethods2() {
    console.group("Splice")

    let someArray = ['Jan', 'Feb', 'Mar', null, true, 1, undefined, 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] //'Apr', 'May', 'Jun'
    console.log(`\t$ let someArray = ['Jan', 'Feb', 'Mar', null, true, 1, undefined, 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    console.log(`\tsomeArray = `, someArray)

    let splicedArray1 = someArray.splice(3, 2)
    console.log(`DELETE\n`)
    console.log(`\t$ let splicedArray1 = someArray.splice(3, 2)`)
    console.log(`\tsplicedArray1 = `, splicedArray1)
    console.log(`\tsplicedArray1.toString() = ${splicedArray1.toString()}`)
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)

    splicedArray1 = someArray.splice(3, 2, ['Apr', 'May', 'Jun'])
    console.log(`DELETE & ADD ONE ELEMENT\n`)
    console.log(`\t$ splicedArray1 = someArray.splice(3, 2, ['Apr', 'May', 'Jun'])`)
    console.log(`\tsplicedArray1 = `, splicedArray1)
    console.log(`\tsplicedArray1.toString() = ${splicedArray1.toString()}`)
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)

    splicedArray1 = someArray.splice(3, 1, ...['Apr', 'May'])
    console.log(`DELETE & ADD Multiple ELEMENTS\n`)
    console.log(`\t$ splicedArray1 = someArray.splice(3, 1, ...['Apr', 'May'])`)
    console.log(`\tsplicedArray1 = `, splicedArray1)
    console.log(`\tsplicedArray1.toString() = ${splicedArray1.toString()}`)
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)

    splicedArray1 = someArray.splice(5, 0, 'Jun')
    console.log(`DELETE NONE & ADD ONE/MORE ELEMENT\n`)
    console.log(`\t$ splicedArray1 = someArray.splice(5, 0, 'Jun')`)
    console.log(`\tsplicedArray1 = `, splicedArray1)
    console.log(`\tsplicedArray1.toString() = ${splicedArray1.toString()}`)
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    
    console.groupEnd()
}

function demoArrayMethods3() {
    console.group("Sorting")

    let someArray = ['a', 'b', 'c', 'd', 'arc', 'barc', 'card', 'curd', 'cert']
    console.log(`\t$ let someArray = ['a', 'b', 'c', 'd', 'arc', 'barc', 'card', 'curd', 'cert']`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    console.log(`\tsomeArray = `, someArray)

        
    console.log("Sort Characters/Strings without Comparer")
    let sortedArray1 = someArray.sort()
    console.log(`\t$ let sortedArray1 = someArray.sort()`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsortedArray1.toString() = ${sortedArray1.toString()}`)
    console.log(`\tsortedArray1 = `, sortedArray1)

    console.log(" ")
    someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    console.log(`\t$ someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    console.log(`\tsomeArray = `, someArray)

    console.log("Sort Numbers without Comparer")

    sortedArray1 = someArray.sort()
    console.log(`\t$ sortedArray1 = someArray.sort()`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsortedArray1.toString() = ${sortedArray1.toString()}`)
    console.log(`\tsortedArray1 = `, sortedArray1)

    console.log("Sort with Comparer")
    sortedArray1 = someArray.sort((a, b) => (a < b))
    console.log(`\t$ sortedArray1 = someArray.sort((a, b) => (a < b))`)
    console.log(`\tsomeArray.toString() = ${someArray.toString()}`)
    console.log(`\tsomeArray = `, someArray)
    console.log(`\tsortedArray1.toString() = ${sortedArray1.toString()}`)
    console.log(`\tsortedArray1 = `, sortedArray1)
    
    console.groupEnd()
}
