import { generateLogDemoObject } from "../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }
let order = 10

const demoSquareStars = () => {
    let lineOutput

    for (let i = 0; i < order; i++) {
        lineOutput = []
        for (let j = 0; j < order; j++) {
            lineOutput.push("*")
        }
        // console.log.apply(null, lineOutput)
        console.log(`${i}:\t`+lineOutput.join(''))
    }
}

const demoRightTriangleStars = () => {
    let lineOutput
    for (let i=0; i<order; i++) {
        lineOutput = []
        for (let j=0; j<=i; j++) {
            lineOutput.push("*");
        }
        console.log(`${i}:\t`+lineOutput.join(''))
    }
}

const demoRightTriangle2 = () => {
    let lineOutput;
    for (let i=0; i<order; i++) {
        lineOutput = []
        for (let j=0; j<order; j++) {
            if (j < i) {
                lineOutput.push(" ");
            } else {
                lineOutput.push("*")
            }
        }
        console.log(`${i}:\t`+lineOutput.join(''))
    }
}

const demoRightTriangle3 = () => {
    let lineOutput;
    for (let i=order; i>0;) {
        i--
        lineOutput = []
        for (let j=0; j<order; j++) {
            if (j < i) {
                lineOutput.push(" ");
            } else {
                lineOutput.push("*")
            }
        }
        console.log(`${i}:\t`+lineOutput.join(''))
    }
}

const demoRightTriangle4 = () => {
    let lineOutput;
    for (let i=order; i>0;) {
        i--
        lineOutput = []
        for (let j=0; j<=i; j++) {
            lineOutput.push("*");
        }
        console.log(`${i}:\t`+lineOutput.join(''))
    }
}

const demoIsoscelesTriangle = () => {
    let lineOutput;
    for (let i=order; i>0;) {
        i--
        lineOutput = []
        for (let j=0; j<order; j++) {
            if (j < i) {
                lineOutput.push(" ");
            } else {
                lineOutput.push("* ")
            }
        }
        console.log(`${i}:\t`+lineOutput.join(''))
    }
}

generateLogDemoObject('demoLoopSquareStars',     "[ Square Stars ]",                    demoSquareStars,            logDemoOptions)
generateLogDemoObject('demoRightTriangleStars',  "[ Right Triangle Stars ]",            demoRightTriangleStars,     logDemoOptions)
generateLogDemoObject('demoRightTriangle2',      "[ Right Triangle Diagonal Flip ]",    demoRightTriangle2,         logDemoOptions)
generateLogDemoObject('demoRightTriangle3',      "[ Right Triangle Horizontal Flip ]",  demoRightTriangle3,         logDemoOptions)
generateLogDemoObject('demoRightTriangle4',      "[ Right Triangle Vertical Flip ]",    demoRightTriangle4,         logDemoOptions)
generateLogDemoObject('demoIsocelesStars',       "[ Isosceless Triangle ]",             demoIsoscelesTriangle,      logDemoOptions)

