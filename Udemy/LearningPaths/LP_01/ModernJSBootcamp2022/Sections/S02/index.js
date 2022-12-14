function demoNumbers() {
    console.group("Numbers")
    console.log("Apart from + - * / % there is another operator - ** (Exponential)")
    console.log(`Example: 2 ** 3: ${2 ** 3}`)
    console.groupEnd()

    console.group("NaN and Infinity")
    console.log(`0 / 0 is ${0/0}`)
    console.log(`NaN + 5 is ${NaN + 5}`)
    console.log(`NaN - 5 is ${NaN - 5}`)
    console.log(`NaN * 5 is ${NaN * 5}`)
    console.log(`NaN / 5 is ${NaN / 5}`)
    console.log(`NaN ** 5 is ${NaN ** 5}`)
    console.log(`1 / 0 is ${1 / 0}`);
    console.log(`-1 / 0 is ${-1 / 0}`);
    console.groupEnd()

    console.group("Unary Operators")
    let score = 52;
    console.log(`let score = ${score}`)
    score += 3
    console.log(`score += 3 \t\t\t score is ${score}`)
    score -= 3
    console.log(`score -= 3 \t\t\t score is ${score}`)
    score *= 3
    console.log(`score *= 3 \t\t\t score is ${score}`)
    score /= 3
    console.log(`score /= 3 \t\t\t score is ${score}`)
    score %= 3
    console.log(`score %= 3 \t\t\t score is ${score}`)
    score **= 3
    console.log(`score **= 3 \t\t\t score is ${score}`)
    let tempScore0 = score++
    console.log(`let tempScore0 = score++ \t score is ${score} \t tempScore0 is ${tempScore0}`)
    let tempScore1 = score--
    console.log(`let tempScore1 = score-- \t score is ${score} \t tempScore1 is ${tempScore1}`)
    let tempScore2 = ++score
    console.log(`let tempScore2 = ++score \t score is ${score} \t tempScore2 is ${tempScore2}`)
    let tempScore3 = --score
    console.log(`let tempScore3 = --score \t score is ${score} \t tempScore3 is ${tempScore3}`)
    console.groupEnd()

    console.group("Variables Can Change Type")
    let var1 = 52
    console.log(`let var1 = ${var1}`)
    var1 = "someString"
    console.log(`after var1 = "someString" \t var1 is ${var1}`)
    var1 = true
    console.log(`after var1 = true \t\t var1 is ${var1}`)
    console.groupEnd()
}

function demoStrings() {
    console.group("String Operations")
    let strVar = "someString_1"
    console.log(`let strVar = ${strVar}`)
    let strVar1 = strVar + 32
    console.log(`let strVar1 = strVar + 32 \t strVar1 is ${strVar1}`)
    strVar1 = strVar - 32
    console.log(`strVar1 = strVar - 32 \t\t strVar1 is ${strVar1}`)
    strVar1 = 1 + "hi"
    console.log(`strVar1 = 1 + "hi" \t\t strVar1 is ${strVar1}`)
    strVar1 = "hi" - "h"
    console.log(`strVar1 = "hi" - "h" \t\t strVar1 is ${strVar1}`)
    strVar1 = "hi" / "hear"
    console.log(`strVar1 = "hi" / "hear" \t strVar1 is ${strVar1}`)
    strVar1 = strVar - 32
    console.log(`strVar1 = strVar - 32 \t\t strVar1 is ${strVar1}`)
    console.groupEnd()

    console.group("String Methods")
    let stringVar = "Lorem Ipsum"
    console.log(`let stringVar = ${stringVar}`)
    console.log(`stringVar.length is ${stringVar.length}`)
    console.log(`stringVar.at() is ${stringVar.at()}`)
    stringVar[0] = "Z"
    console.log(`after stringVar[0] = "Z" \t stringVar is ${stringVar}`)
    stringVar[0] = "Y"
    console.log(`after stringVar[0] = "Y" \t stringVar is ${stringVar}`)
    stringVar[0] = "P"
    console.log(`after stringVar[0] = "P" \t stringVar is ${stringVar}`)
    console.groupEnd()

    console.group("String Methods - Immutability")
    stringVar = "Dolor Set"
    console.log(`stringVar = ${stringVar}`)
    let stringVar1 = stringVar.replace("D", "$");
    console.log(`let stringVar1 = stringVar.replace("D", "$");
    stringVar is ${stringVar}
    stringVar1 is ${stringVar1}`)
    console.groupEnd()

    console.group("String Methods 3")
    stringVar = "Lorem ipsum dolor sit."
    console.log(`stringVar = ${stringVar}`)
    stringVar1 = stringVar.replace("o", "-");
    console.log(`stringVar1 = stringVar.replace("o", "-");
    stringVar is ${stringVar}
    stringVar1 is ${stringVar1}`)
    stringVar1 = stringVar.replaceAll("o", "-");
    console.log(`stringVar1 = stringVar.replaceAll("o", "-");
    stringVar is ${stringVar}
    stringVar1 is ${stringVar1}`)
    console.groupEnd()
}

function demoMath() {
    console.log(`$ Math.PI\n\t${Math.PI}`)
    let floorPI = Math.floor(Math.PI)
    console.log(`$ let floorPI = Math.floor(Math.PI)\n\tfloorPI = ${floorPI}`)
    let ceilPI = Math.ceil(Math.PI)
    console.log(`$ let ceilPI = Math.ceil(Math.PI)\n\tceilPI = ${ceilPI}`)
    let roundedPI = Math.round(3.45)
    console.log(`$ let roundedPI = Math.round(3.45)\n\troundedPI = ${roundedPI}`)
    roundedPI = Math.round(3.55)
    console.log(`$ roundedPI = Math.round(3.55)\n\troundedPI = ${roundedPI}`)
    roundedPI = Math.round(3.50)
    console.log(`$ roundedPI = Math.round(3.50)\n\troundedPI = ${roundedPI}`)
    console.log('')
    let defaultRandom = Math.random()
    console.log(`$ let defaultRandom = Math.random()\n\tdefaultRandom = ${defaultRandom}`)
    let randomInRange_0_20 = (Math.floor(Math.random() * 20))
    console.log(`$ let randomInRange_0_20 = (Math.floor(Math.random() * 20))`)
    console.log(`\trandomInRange_0_20 = ${randomInRange_0_20}`)
    let randomInRange_20_30 = (Math.floor(Math.random() * (30 - 20)) + 20)
    console.log(`$ let randomInRange_20_30 = (Math.floor(Math.random() * (30 -20)) + 20)`)
    console.log(`\trandomInRange_20_30 = ${randomInRange_20_30}`)
}