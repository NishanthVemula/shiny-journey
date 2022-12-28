import { generateLogDemoObject } from "../../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }

const demoRestAndSpread = () => {

	console.group(`[ Spread - Array ]`)

	let someArray = ["carrot", "spinach", "beetroot"]
	let someArray2 = [ "capsicum", "tomato", "onion" ]

	console.log(`\tlet someArray = ${someArray}\n\tlet someArray2 = ${someArray2}`)

	console.log(`- combned someArray and someArray2 with Spread operator - [...someArray, ...someArray2]`)
	console.log("\t", [...someArray, ...someArray2])
	
	console.groupEnd()

	console.group(`[ Spread - Object ]`)

	let someObject = { key1: "val1", key2: "val2"}
	let someObject2 = { key3: "val3", key4: "val4", key2: "overriddenval2"}

	console.log(`\tlet someObject = `, someObject)
	console.log(`\tlet someObject2 = `, someObject2)

	console.log(`- combned someObject and someObject2 with Spread operator - {...someArray, ...someArray2}`)
	console.log(`${JSON.stringify({...someObject, ...someObject2}, null, 2)}`)
	
	console.groupEnd()

	let numbers = [1, 2, 3, 67, 43, 32, 51, 99, 61, 21]
	console.log(`let numbers = ${numbers}`)
	
	console.group(`[ * Arguments ]`)
	
	function customIterator() {
		let args = [...arguments]
		args.forEach(e => console.log(e));
	}
	customIterator(...numbers)
	console.groupEnd()

	console.group(`[ Rest ]`)
	function customIterator2(...args) {
		args.forEach(e => console.log(e))
	}
	customIterator2(...numbers)
	console.groupEnd()
}

const demoDestructureArrays = () => {
	
	let array1 = ["el1", "el2", undefined, "el4", "el5", "el6", "el7"]
	console.log(`let array1 = `, array1)

	{
		console.log("- Default Simple Destructuring")
		const [first, second, third, ...rest] = array1
		console.log(`const [first, second, third, ...rest] = array1`)
		console.log(`\t first = `, first)
		console.log(`\t second = `, second)
		console.log(`\t third = `, third)
		console.log(`\t rest = `, rest)
	}

	{
		console.log("- Destructuring values out of sequence")
		let array1 = ["el1", "el2", "el3", "el4", "el5", "el6", "el7"]
		console.log(`let array1 = `, array1)
		const [first, , ,fourth, ...rest] = array1
		console.log(`const [first, , ,fourth, ...rest] = array1`)
		console.log(`\t first = `, first)
		console.log(`\t fourth = `, fourth)
		console.log(`\t rest = `, rest)
	}

	{
		console.log("- Providing default value  *** Only if it is undefined")
		const [first, second = "blue", third = "Red", ...rest] = array1
		console.log(`const [first, second, third, ...rest] = array1`)
		console.log(`\t first = `, first)
		console.log(`\t second = `, second)
		console.log(`\t third = `, third)
		console.log(`\t rest = `, rest)
	}

} 


const demoDestructureObjects = () => {
	
	let object1 = { key1: "Val1", key2: "val2", key3: 0, key4: () => { console.log("someRandomFUnction") }, key5: 92.6, key6 : null, "somekey-x": "some value - Y" }
	console.log(`let object1 = `, object1)

	{
		console.log("- Simple destructuring")
		const { key1, key2, key7, key6, ...rest } = object1
		console.log(`const {key1, key2, key7, ...rest} = object1`)
		console.log(`\t key1 = `, key1)
		console.log(`\t key2 = `, key2)
		console.log(`\t key7 = `, key7)
		console.log(`\t key6 = `, key6)
		console.log(`\t rest = `, rest)
	}


	{
		console.log("- storing key into a variable with different name")
		const { key1, key2, key5: variable5, "somekey-x": someKey_X, ...rest } = object1
		console.log(`const {key1, key2, key7, ...rest} = object1`)
		console.log(`\t key1 = `, key1)
		console.log(`\t key2 = `, key2)
		console.log(`\t variable5 = `, variable5)
		console.log(`\t someKey_X = `, someKey_X)
		console.log(`\t rest = `, rest)
	}

	{
		console.log("- Providing default value if object does not have key or is explicitly set to undefined (not Null)")
		const { key1, key2 = 890, key7 = 10, key6 = "some random value", ...rest } = object1
		console.log(`const {key1, key2, key7, ...rest} = object1`)
		console.log(`\t key1 = `, key1)
		console.log(`\t key2 = `, key2)
		console.log(`\t key7 = `, key7)
		console.log(`\t key6 = `, key6)
		console.log(`\t rest = `, rest)
	}

} 

const demoDefaultFnParams = () => {
	function multiplyOldWay(a, b) {
		if(typeof b === "undefined") {
			b = 1
		}
		if(typeof a === "undefined") {
			a = 1
		}
		return (a * b)
	}

	function multiplyAnotherOldWay(a, b) {
		a = (typeof a === "undefined") ? 1 : a
		b = (typeof b === "undefined") ? 1 : b
		return (a * b)
	}

	function multiply(a = 1, b = 1) {
		return a * b
	}

	console.log(`multiplyOldWay() = ${multiplyOldWay()}`)
	console.log(`multiplyAnotherOldWay() = ${multiplyAnotherOldWay()}`)
	console.log(`multiply() = ${multiply()}`)
	console.log(`multiply(32, 8) = ${multiply(32, 8)}`)
}

const demoNestedDestructuring = () => {
	let someArray = [{
		k1: "val1",
		k2: "val2",
		k3: "India"
	}, {
		k1: "val1_2",
		k2: "val2_2",
		k3: "Ethiopia"
	}, {
		k1: "val1_3",
		k2: "val2_3",
		k3: "Germany"
	}, {
		k1: "val1_4",
		k2: "val2_4",
		k3: "Poland"
	}]

	const [ first, { k3: secondk3 }, ...rest] = someArray;
	console.log(`someArray is`, someArray)
	console.log(`first is `, first)
	console.log(`secondk3 is `, secondk3)
	console.log(`rest is `, rest)
}

generateLogDemoObject('demoRestAndSpread',		"[ Rest and Spread ]",				demoRestAndSpread,		logDemoOptions)
generateLogDemoObject('demoDefaultFnParams',	"[ Default Function Parameters ]",	demoDefaultFnParams,	logDemoOptions)
generateLogDemoObject('demoDestructureArrays',	"[ Destructure Array ]",			demoDestructureArrays,	logDemoOptions)
generateLogDemoObject('demoDestructureObjects',	"[ Destructure Objects ]",			demoDestructureObjects,	logDemoOptions)
generateLogDemoObject('demoNestedDestructuring',	"[ Nested Desgructuring ]",		demoNestedDestructuring,	logDemoOptions)