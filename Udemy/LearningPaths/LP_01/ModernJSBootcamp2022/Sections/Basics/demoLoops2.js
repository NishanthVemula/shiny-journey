import { generateLogDemoObject } from "../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }

const demoForOfLoop = () => {
    let someObject = [
        'value1', 123, 236.8, { key5_1: 'value5_1', key5_2: 5.2 }
    ]
    console.log('-- using for loop --')
    for (let i = 0; i < someObject.length; i++) {
        console.log(`present iterator is: `, someObject[i])
    }
    console.log('-- using for of loop --')
    for (const iterator of someObject) {
        console.log(`present iterator is: `, iterator)
    }
}

const demoForOfLoop2 = () => {
    let someString = "r/Place"
    console.log('-- using for loop --')
    for (let i = 0; i < someString.length; i++) {
        console.log(`present iterator is: `, someString[i])
    }
    console.log('-- using for of loop --')
    for (const iterator of someString) {
        console.log(`present iterator is: `, iterator)
    }
}

const demoForInLoop = () => {
    let someObject = {
        key1: 'value1', key2: 123, key4: 236.8, key5: {
            key5_1: 'value5_1', key5_2: 5.2
        }
    }
    console.log(`$ let someObject = ${JSON.stringify(someObject, null, 2)}`)
    for (const iterator in someObject) {
        console.log(`present iterator is: ${iterator}\t and value is: `, someObject[iterator])
    }
}

const demoForInLoop2 = () => {
    let someString = "r/Place"
    console.log(`$ let someString = `, someString)
    for (const iterator in someString) {
        console.log(`present iterator is: ${iterator}\t and value is: `, someString[iterator])
    }
}

generateLogDemoObject('forOfLoopDemo',      "[ FOR OF LOOP ]",       demoForOfLoop,      logDemoOptions)
generateLogDemoObject('forOfLoopDemo2',     "[ FOR OF LOOP 2 ]",     demoForOfLoop2,     logDemoOptions)

generateLogDemoObject('forInLoopDemo',      "[ FOR IN LOOP ]",       demoForInLoop,      logDemoOptions)
generateLogDemoObject('forInLoopDemo2',     "[ FOR IN LOOP 2 ]",     demoForInLoop2,     logDemoOptions)

