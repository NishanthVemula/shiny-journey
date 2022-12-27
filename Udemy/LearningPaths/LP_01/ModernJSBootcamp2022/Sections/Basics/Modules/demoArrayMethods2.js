import { generateLogDemoObject } from "../../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }

const demoArrayForEachMethod = () => {
    let someArray = ["a", "b", "c", "d"]
    console.log(`iterate using using for loop`)
    for (let index = 0; index < someArray.length; index++) {
        console.log(`\tindex is: ${index} << >> element is ${someArray[index]}`)
    }
    console.log(`iterate using using forEach`)
    someArray.forEach((element, index) => console.log(`\tindex is: ${index} << >> element is ${element}`))
}

const demoArrayMapMethod = () => {
    let masterTable = [
        { key1: "value1", key2: "value2", id: 1},
        { key1: "value2", key2: "value2", id: 2},
        { key1: "value3", key2: "value3", id: 3},
        { key1: "value4", key2: "value4", id: 4}
    ]

    let key1Table = masterTable.map(x => {
        let { key1, id } = x;
        return { key1, id}
    })

    console.log(`master Table is\n${JSON.stringify(masterTable, null, 2)}`)
    console.log(`key1 Table is\n${JSON.stringify(key1Table, null, 2)}`)
}

const demoArrayFind = () => {
    let movies = [
        { name: "RRR", director: "SSR" },
        { name: "KGF", director: "Prashant Neil" },
        { name: "Mission Impossible 7", director: "Christopher McQuarrie" },
        { name: "Eega", director: "SSR" }
    ]

    console.log(`movies are: ${JSON.stringify(movies, null, 2)}`)
    console.log(`movie directed by SSR is ${movies.find(movie => movie.director === "SSR")?.name}`)
}

const demoArrayFilter = () => {
    let someArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(`someArray is: `, someArray)
    console.log(`someArray filtered for even numbers is`, someArray.filter(num => (num%2 === 0)))
}

const demoArraySomeAndEvery = () => {

	function someNEvery(someArray) {
    	if(someArray.every(val => val%2 == 0))
			console.log(`Every element of "${someArray}" is an even Number`)
		else if(someArray.some(val => val%2 == 0))
			console.log(`Not All elements of "${someArray}" are even numbers`)
		else
			console.log(`None of the elements of "${someArray}" are even numbers`)
	}

	someNEvery([ 2, 4, 78, 98 ])
	someNEvery([ 1, 2, 3, 4, 5, 6, 7, 8 ])
	someNEvery([ 1, 15, 27, 93 ])

}

const demoArraySortStrings = () => {
	let array1 = [ "armadillo", "boar", "bear", "green", "apple", "Article", "Zebra", "zoo"]
	console.log(`\tarray1 is: ${array1}`)
	console.log(`\tarray1.sort is: ${array1.sort()}`)
	console.log(`\tafter sortm array1 is: ${array1}`)
}

const demoArraySortNumbers = () => {
	let numbers = [ 2, 34, 67, 38, 18, 8]
	console.log(`-> numbers is ${numbers}`)
	console.log(`\tnumbers ascending sort is: ${numbers.sort((a, b) => (a > b))}`)
	console.log(`\tnumbers after sorting is ${numbers}`)

	numbers = [ 2, 34, 67, 38, 18, 8]
	console.log(`-> numbers is ${numbers}`)
	console.log(`\tnumbers descending sort is: ${numbers.sort((a, b) => (b - a))}`)
	console.log(`\tnumbers after sorting is ${numbers}`)
}

const demoArraySortObjects = () => {
	let books = [
		{ title: "1", rating: 9, views: 200 },
		{ title: "2", rating: 8, views: 500 },
		{ title: "3", rating: 4, views: 100 },
		{ title: "4", rating: 5, views: 230 },
		{ title: "5", rating: 7, views: 760 },
		{ title: "6", rating: 9, views: 206 },
		{ title: "7", rating: 8, views: 506 },
		{ title: "8", rating: 4, views: 106 },
		{ title: "9", rating: 5, views: 236 },
		{ title: "10", rating: 7, views: 766 }
	]
	console.log(`-> books are:`)
	books.forEach(book => console.log("\t", book))

	let sortedbooks = books.sort((b1, b2) => {
		// highest rating first
		if(b1.rating > b2.rating)
			return false
		if(b1.rating < b2.rating)
			return true
		
		// if ratings are equal, highest views first
		// if views are equal do not switch
		return (b2.views > b1.views)
	})
	
	console.log(`\tsorted books are:`,)
	sortedbooks.forEach(book => console.log("\t", book))
	console.log(`\t books are:`)
	books.forEach(book => console.log("\t", book))
}

const demoArrayReduce = () => {
	let numbers = [1, 27, 13, 4, 56, 78, 90, 32, 42]

	console.log(`-> numbers is ${numbers}`)

	console.log(`-> using reduce to sum all numbers`)
	console.log(`\tsum is not reference type`)
	console.log(`\t(*) Assignment is necessary`)

	let sum = numbers.reduce((accum, curr) => accum + curr, 0)

	console.log(`\t- using initialValue of 0`)
	console.log(`\tsum of All numbers in array 'numbers' is: ${sum}`)
	
	console.log(`\t- not using initialValue`)
	console.log(`\t- Takes first value as accumulator`)
	console.log(`\t- Starts iteration with second value`)

	sum = numbers.reduce((accum, curr) => accum + curr)
	
	console.log(`\tsum of All numbers in array 'numbers' is: ${sum}`)

	console.log(`-> using foreach to sum all numbers`)
	
	sum = 0;
	numbers.forEach(n => sum+=n)
	
	console.log(`\tsum of All numbers in array 'numbers' is: ${sum}`)

	console.log(`-> using reduce to filter even numbers`)
	console.log(`\t'evenNumbers' array is a reference type`)
	console.log(`\t(*) Assignment is not necessary`)
	
	let evenNumbers = []
	numbers.reduce((accum, curr) => {
		(curr%2 == 0) && accum.push(curr)
		return accum
	}, evenNumbers)
	
	console.log(`\teven Numbers : ${evenNumbers}`)

	console.log(`-> using reduce to find maximum of all numbers`)
	console.log(`\tmax is not reference type`)
	console.log(`\t(*) Assignment is necessary`)
	
	let max = numbers.reduce((accum, curr) => Math.max(accum, curr))
	
	console.log(`\tmax of All numbers in array 'numbers' is: ${max}`)
}

generateLogDemoObject('demoArrayForEach',	"[ Array: ForEach ]",	demoArrayForEachMethod,	logDemoOptions)
generateLogDemoObject('demoArrayMap',		"[ Array: ForEach ]",	demoArrayMapMethod,	    logDemoOptions)
generateLogDemoObject('demoArrayFind',		"[ Array Find ]",		demoArrayFind,			logDemoOptions)
generateLogDemoObject('demoArrayFilter',	"[ Array Filter ]",		demoArrayFilter,		logDemoOptions)
generateLogDemoObject('demoArraySome&Every',	"[ Array Some & Every ]",	demoArraySomeAndEvery,	logDemoOptions)
generateLogDemoObject('demoArraySortStrings',	"[ Array Sort Strings ]", 	demoArraySortStrings, 	logDemoOptions)
generateLogDemoObject('demoArraySortNumbers',	"[ Array Sort Numbers ]", 	demoArraySortNumbers, 	logDemoOptions)
generateLogDemoObject('demoArraySortObjects',	"[ Array Sort Objects ]", 	demoArraySortObjects, 	logDemoOptions)
generateLogDemoObject('demoArrayReduce',	"[ Array Reduce ]", 	demoArrayReduce, 		logDemoOptions)