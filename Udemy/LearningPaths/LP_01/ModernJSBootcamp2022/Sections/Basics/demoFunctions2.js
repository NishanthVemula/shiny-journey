import { generateLogDemoObject } from "../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }

const demoFunctions5 = () => {
	function getDCHeros() {
		const heros = ['superman', 'green lantern', 'batman', 'wonderwoman', 'shazam']
		function innerFunction(num) {
			return heros[parseInt(Math.floor(num % 5))]
		}
		return innerFunction;
	}

	let index = 0
	while(index < 100) {
		index = Math.random()*105;
		console.log(`index is ${index}, hero is ${getDCHeros()(index)}`)
	}
}

const demoFunctions6 = () => {
	function add(x, y) {
		return x + y
	}

	const sum = (x, y) => (x + y)

	console.log(`add(1, 2) == sum(1, 2) >>>> `, (add(1,2) == sum(1, 2)))
}

generateLogDemoObject('demoFunctions5',	"[ Lexical Scope ]",		demoFunctions5,		logDemoOptions)
generateLogDemoObject('demoFunctions6',	"[ Function Expression ]",	demoFunctions6,		logDemoOptions)
