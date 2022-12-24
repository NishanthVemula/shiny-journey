import { generateLogDemoObject } from "../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }

const demoForLoop = () => {
    for (let i = 0; i < 10; i++) {
        console.log(`i = ${i}`)
    }
}

const demoNestedForLoop = () => {
    let toConsole
    for (let i = 0; i < 10; i++) {
        toConsole = `i = ${i} ──>`;
        for (let j = i; j > 0; j--) {
            toConsole += `  ${j}`
        }
        console.log(toConsole);
    }
}

const demoNestedForLoop2 = () => {

    let identityMatrix4 = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]
    let limitI = identityMatrix4.length
    let logOutput, currentRow, limitJ;

    console.log('');

    for (let rowIndex = 0; rowIndex < limitI; rowIndex++) {
        logOutput = ["|"]
        currentRow = identityMatrix4[rowIndex]
        limitJ = currentRow.length
        for (let columnIndex = 0; columnIndex < limitJ; columnIndex++) {
            logOutput.push(`${currentRow[columnIndex]}`)
        }
        logOutput.push("|")
        console.log(`\t${logOutput.join(' ')}`)
    }
}

const demoBreakingForLoop = () => {

    console.log(`-- for without break --`)
    for (let i = 0; i<=10 ; i++) {
        console.log(`  ${i}`)
    }

    console.log(`-- for with break --`)
    for (let i = 0; ; i++) {
        console.log(`  ${i}`)
        if (i >= 10) {
            break;
        }
    }
}

const whileLoopDemo = () => {
    let i = 0;
    while (i < 10) {
        console.log(`i = ${i}`)
        i++;
    }
}

const nestedWhileLoopDemo = () => {
    let toConsole = "";
    let i = 0;
    while (i < 10) {
        toConsole = `i = ${i} ──>`;
        let j = 0;
        while (j < i) {
            toConsole += `  ${j++}`
        }
        console.log(toConsole)
        i++;
    }
}

const nestedWhileLoopDemo2 = () => {
    let identityMatrix4 = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]
    let limitI = identityMatrix4.length
    let logOutput, currentRow, limitJ;

    console.log('');

    let rowIndex = 0;
    while (rowIndex < limitI) {
        logOutput = ["|"]
        currentRow = identityMatrix4[rowIndex]
        limitJ = currentRow.length
        let columnIndex = 0
        while (columnIndex < limitJ) {
            logOutput.push(`${currentRow[columnIndex++]}`)
        }
        logOutput.push("|")
        console.log(`\t${logOutput.join(' ')}`)

        rowIndex++
    }
}

const demoBreakingWhileLoop = () => {
    let i = 0;

    console.log(`-- while without break --`)
    while (i<=10) {
        console.log(`  ${i++}`)
    }

    console.log(`-- while with break --`)
    i = 0;
    while (true) {
        console.log(`  ${i++}`)
        if (i > 10) {
            break;
        }
    }
}

generateLogDemoObject('demoForLoop',            "[ FOR LOOP ]",             demoForLoop,            logDemoOptions)
generateLogDemoObject('demoNestedForLoop',      "[ NESTED FOR LOOP ]",      demoNestedForLoop,      logDemoOptions)
generateLogDemoObject('demoNestedForLoop2',     "[ NESTED FOR LOOP 2 ]",    demoNestedForLoop2,     logDemoOptions)
generateLogDemoObject('demoBreakingForLoop',    "[ BREAKING FOR ]",         demoBreakingForLoop,    logDemoOptions)

generateLogDemoObject('whileLoopDemo',          "[ WHILE LOOP ]",           whileLoopDemo,          logDemoOptions)
generateLogDemoObject('nestedWhileLoopDemo',    "[ NESTED WHILE LOOP ]",    nestedWhileLoopDemo,    logDemoOptions)
generateLogDemoObject('nestedWhileLoopDemo2',   "[ NESTED WHILE LOOP 2 ]",  nestedWhileLoopDemo2,   logDemoOptions)
generateLogDemoObject('demoBreakingWhileLoop',  "[ BREAKING WHILE ]",       demoBreakingWhileLoop,  logDemoOptions)
