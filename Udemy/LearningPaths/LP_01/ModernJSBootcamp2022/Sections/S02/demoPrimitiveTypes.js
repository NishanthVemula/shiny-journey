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

    console.log("- at")
    console.log(`\tstringVar.at() is ${stringVar.at()}`)
    console.log(`\tstringVar.at(0) is ${stringVar.at(0)}`)
    console.log(`\tstringVar.at(1) is ${stringVar.at(1)}`)
    console.log(`\tstringVar.at(-1) is ${stringVar.at(-1)}`)

    console.log("- charAt")
    console.log(`\tstringVar.charAt() is ${stringVar.charAt()}`)
    console.log(`\tstringVar.charAt(0) is ${stringVar.charAt(0)}`)
    console.log(`\tstringVar.charAt(1) is ${stringVar.charAt(1)}`)
    console.log(`\tstringVar.charAt(-1) is ${stringVar.charAt(-1)}`)

    console.log("- index")
    stringVar[0] = "Z"
    console.log(`\tafter stringVar[0] = "Z" \t stringVar is ${stringVar}`)
    stringVar[0] = "Y"
    console.log(`\tafter stringVar[0] = "Y" \t stringVar is ${stringVar}`)
    stringVar[0] = "P"
    console.log(`\tafter stringVar[0] = "P" \t stringVar is ${stringVar}`)

    console.log("- concat")
    let stringHello = "Hello"
    let stringWorld = "WOrld"

    console.log(`\tlet stringHello = ${stringHello}`)
    console.log(`\tlet stringWorld = ${stringWorld}`)
    console.log(`\tstringHello.concat(', ', stringWorld) is ${stringHello.concat(', ', stringWorld)}`)
    console.log(`\tstringHello = ${stringHello}`)
    console.log(`\tstringWorld = ${stringWorld}`)

    console.log("- endswith")
    stringVar = 'Programming is The best!';
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\tstringVar.endsWith('best!') is ${stringVar.endsWith('best!')}`);
    console.log(`\tstringVar.endsWith('best', stringVar.length - 1) is ${stringVar.endsWith('best', stringVar.length - 1)}`);

    console.log("- endswith (2)")
    stringVar = 'Programming is The best !';
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\tstringVar.endsWith('best !') is ${stringVar.endsWith('best !')}`);
    console.log(`\tstringVar.endsWith('best', stringVar.length - 2) is ${stringVar.endsWith('best', stringVar.length - 2)}`);

    console.log("- endswith (3)")
    stringVar = 'Is this a question?';
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\tstringVar.endsWith('question') is ${stringVar.endsWith('question')}`);

    console.log("- includes")
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\tstringVar.includes("Is") = ${stringVar.includes("Is")}`)
    console.log(`\tstringVar.includes("  ") = ${stringVar.includes("  ")}`)

    console.log("- indexOf & lastIndexOf");
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    const searchTerm = 'dog';
    const indexOfFirst = paragraph.indexOf(searchTerm);

    console.log(`\tconst paragraph = ${paragraph}`)
    console.log(`\tconst searchTerm = ${searchTerm}`)
    console.log(`\tThe index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
    console.log(`\tThe index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
    console.log(`\tThe index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
    console.log(`\tThe last 2nd index of the "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm, paragraph.lastIndexOf(searchTerm) - 1)}`);

    console.log("- padEnd & padStart");
    stringVar = 'Breaded Mushrooms';
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\tstringVar.padEnd(25, '.') is "${stringVar.padEnd(25, '.')}"`);
    console.log(`\tstringVar.padEnd(25, '.').length is ${stringVar.padEnd(25, '.').length}`);
    stringVar = '200';
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\tstringVar.padEnd(5) is "${stringVar.padEnd(5)}"`);
    console.log(`\tstringVar.padEnd(5).length is ${stringVar.padEnd(5).length}`);

    console.log("- string.raw")
    console.log(`\tnew String(\`C:\\Program Files\\SomeLocation\\SomeFile.html\`) is ${new String(`C:\Program Files\SomeLocation\SomeFile.html`)}`)
    console.log(`\tnew String("C:\\Program Files\\SomeLocation\\SomeFile.html") is ${new String("C:\Program Files\SomeLocation\SomeFile.html")}`)
    console.log(`\tString.raw\`C:\\Program Files\\SomeLocation\\SomeFile.html\` is ${String.raw`C:\Program Files\SomeLocation\SomeFile.html`}`)

    stringVar = "Lorem ipsum dolor sit."
    console.log(`stringVar = ${stringVar}`)

    console.log("- replace")
    let stringVar1 = stringVar.replace("o", "-");
    console.log(`\tlet stringVar1 = stringVar.replace("o", "-");
    \t\tstringVar is ${stringVar}
    \t\tstringVar1 is ${stringVar1}`)

    console.log("- replaceAll")
    stringVar1 = stringVar.replaceAll("o", "-");
    console.log(`\tstringVar1 = stringVar.replaceAll("o", "-");
    \t\tstringVar is ${stringVar}
    \t\tstringVar1 is ${stringVar1}`)

    console.log("- slice")
    stringVar = "The quick brown fox jumps over the lazy dog."
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\tstringVar.slice(31) is ${stringVar.slice(31)}`);
    console.log(`\tstringVar.slice(4, 19) is ${stringVar.slice(4, 19)}`);
    console.log(`\tstringVar.slice(-4) is ${stringVar.slice(-4)}`);
    console.log(`\tstringVar.slice(-9, -5) is ${stringVar.slice(-9, -5)}`);

    console.log("- splice")
    console.log(`\tstringVar = ${stringVar}`)
    console.log(`\t stringVar.split(' ') = ${stringVar.split(' ')}`)
    console.log(`\t stringVar.split('') = ${stringVar.split('')}`)
    console.log(`\t stringVar.split() = ${stringVar.split()}`)

    console.log("- trim")
    stringVar = "   Trimmable String   "
    console.log(`\tstringVar = "${stringVar}"`)
    console.log(`\tstringVar.trim() = "${stringVar.trim()}"`)
    console.log(`\tstringVar.trimStart() = "${stringVar.trimStart()}"`)
    console.log(`\tstringVar.trimEnd() = "${stringVar.trimEnd()}"`)

    console.groupEnd()

    console.group("String Methods - Immutability")
    stringVar = "Dolor Set"
    console.log(`stringVar = ${stringVar}`)
    stringVar1 = stringVar.replace("D", "$");
    console.log(`stringVar1 = stringVar.replace("D", "$");
    stringVar is ${stringVar}
    stringVar1 is ${stringVar1}`)
    console.groupEnd()
}

function demoMath() {
    console.group("Math")
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
    console.groupEnd();
}

function demoParse() {
    console.group("ParseInt / ParseFloat")
    console.log(`\t parseInt("1.4") is ${parseInt("1.4")}`)
    console.log(`\t parseFloat("1.4") is ${parseFloat("1.4")}`)
    
    console.log(`\t parseInt("28.5Units") is ${parseInt("28.5Units")}`)
    console.log(`\t parseFloat("28.5Units") is ${parseFloat("28.5Units")}`)

    console.log(`\t parseInt("    28.5Units") is ${parseInt("    28.5Units")}`)
    console.log(`\t parseFloat("    28.5Units") is ${parseFloat("    28.5Units")}`)

    console.log(`\t parseInt("+28.5Units") is ${parseInt("+28.5Units")}`)
    console.log(`\t parseFloat("+28.5Units") is ${parseFloat("+28.5Units")}`)

    console.log(`\t parseInt("-28.5Units") is ${parseInt("-28.5Units")}`)
    console.log(`\t parseFloat("-28.5Units") is ${parseFloat("-28.5Units")}`)

    console.log(`\t parseInt("Number of days is 28.5") is ${parseInt("Number of days is 28.5")}`)
    console.log(`\t parseFloat("Number of days is 28.5") is ${parseFloat("Number of days is 28.5")}`)

    console.groupEnd()
}