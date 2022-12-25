import { generateLogDemoObject } from "../../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }

const demoHOF1 = () => {
	const add = (a, b) => (a + b)
    const subtract = (a, b) => (a / b)
    const multiply = (a, b) => (a * b)
    const divide = (a, b) => (a / b)

    let functions = [add, subtract, multiply, divide]

    functions.forEach(fn => {
        console.log(`\tfn is ${fn}`)
        console.log(`\t\tfn(1, 2) is ${fn(1, 2)}`)
    })
}

const demoHOF2 = () => {
    console.log(`- Function accepting another function as argument`)
    function doSomethingTimes(doFunction, times) {
        for(let i = 0; i < times; i++) {
            doFunction(i)
        }
    }

    doSomethingTimes(
        x => console.log(`\tcurrent index is ${x}`),
        10
    )
}

const demoHOF3 = () => {
    console.log(`- Function returning another function`)
    function multipleBy(times) {
        return inp => (inp * times)
    }

    const triple = multipleBy(3)
    const double = multipleBy(2)
    const halve = multipleBy(0.5)

    console.log(`\ttriple(7) is ${triple(7)}`)
    console.log(`\ttriple(7) is ${triple(7)}`)
    console.log(`\ttriple(7) is ${triple(7)}`)
}

generateLogDemoObject('demoHOF1',	"[ Higher Order Function 1 ]",	demoHOF1,	logDemoOptions)
generateLogDemoObject('demoHOF2',	"[ Higher Order Function 2  ]",	demoHOF2,	logDemoOptions)
generateLogDemoObject('demoHOF3',	"[ Higher Order Function 3  ]",	demoHOF3,	logDemoOptions)

