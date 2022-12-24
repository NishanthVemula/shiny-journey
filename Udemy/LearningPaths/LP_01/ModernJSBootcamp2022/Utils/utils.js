/**
 * Utility Method to print the demo function execution result into the console
 * @param {String} title
 * @param {function} demoFn
 * @param {boolean} collapsed
 * @param {boolean} withCode
 */
export const logDemoFunction = function (args) {
    const { title = "", demoFn = null, collapseLog = true, withCode = false } = args;
    collapseLog ? console.groupCollapsed(title) : console.group(title)
    withCode && console.info(demoFn.toString());
    demoFn();
    console.groupEnd()
}

export const generateLogDemoObject = ( id, title, demoFn,  options = { withCode : false, collapseLog : false} ) => {
    document
    .getElementById(id)
    .addEventListener('click', () => {
        logDemoFunction({ ...options, id, title, demoFn })
    })
}

export const makeRandomColor = function () {
    let redVal = Math.floor(Math.random() * 255)
    let greenVal = Math.floor(Math.random() * 255)
    let blueVal = Math.floor(Math.random() * 255)
    return `rgb(${redVal}, ${greenVal}, ${blueVal})`
}