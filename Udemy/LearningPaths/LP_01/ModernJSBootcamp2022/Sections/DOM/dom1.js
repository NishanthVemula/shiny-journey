import { generateLogDemoObject } from "../../Utils/utils.js";

const logOptions = { withCode: true, collapseLog: false };

const demoGetElById = () => {
    const btn = document.getElementById("demo-get-el-id")

    let c1 = "--- Original ---", c2 = "--- Changed ---"
    btn.innerText = ((btn.innerText == c1) ? c2 : c1)
}

const demoGetElByTagName = () => {
    const btn = document.getElementsByTagName("header")[0]

    btn.classList.toggle("demo-get-el-tag-name");
}

const demoGetElByClassName = () => {
    const btn = document.getElementsByClassName("sticky-top")[0]

    btn.classList.toggle("demo-get-el-class-name");
}

generateLogDemoObject('demoGetElById', "[ Get Element By ID ]", demoGetElById, logOptions)
generateLogDemoObject('demoGetElByTagName', "[ Get Element*s By Tag Name ]", demoGetElByTagName, logOptions)
generateLogDemoObject('demoGetElByClassName', "[ Get Element*s By Class Name ]", demoGetElByClassName, logOptions)


const demoQuerySelector = () => {

    const element1 = document.querySelector("#demo-q-s-ul")
    console.log("- selection by Id", element1)

    const element2 = document.querySelector("ul")
    console.log("- selection by Tag Name", element2)

    const element3 = document.querySelector(".btn-dark-custom")
    console.log("- selection by class name", element3)

}

const demoQuerySelectorAll = () => {
    const element1 = document.querySelectorAll("#demo-q-s-ul")[0]
    console.log("- selection by Id", element1)

    const elements2 = document.querySelectorAll("ul")
    elements2.forEach((el, index) => console.log(`- selection by Tag Name at index ${index} is `, el))

    const elements3 = document.querySelectorAll(".btn-dark-custom")
    elements3.forEach((el, index) => console.log(`- selection by Class Name Name at index ${index} is `, el))
}


generateLogDemoObject('demoQuerySelector', "[ Query Selector ]", demoQuerySelector, logOptions)
generateLogDemoObject('demoQuerySelectorAll', "[ Query Selector All ]", demoQuerySelectorAll, logOptions)
