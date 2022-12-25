function demoCompare1() {
    console.group("Comparisions - Numbers")

    console.log(`\t 1 < 2\t\t is \t${1 < 2}`)
    console.log(`\t 1 > 2\t\t is \t${1 > 2}`)
    console.log(`\t 1 == 1\t\t is \t${1 == 1}`)
    console.log(`\t 1 == 2\t\t is \t${1 == 2}`)
    console.log(`\t 1 != 2\t\t is \t${1 != 2}`)
    console.log(`\t 1 === 1\t is \t${1 === 1}`)
    console.log(`\t 1 === 2\t is \t${1 == 2}`)
    console.log(`\t 1 !== 2\t is \t${1 != 2}`)

    console.groupEnd()
}

function demoCompare2() {
    console.group("Comparisions - Characters")

    console.log(`"a" < "b"\t is \t${"a" < "b"}`)
    console.log(`"a" < "A"\t is \t${"a" < "A"}`)

    console.groupEnd()
}

function demoCompare3() {
    console.group("Comparisions - Strings")

    let sv1 = "string1";
    let sv2 = 'string2';

    console.log(`$ "${sv1}" == "${sv2}"\tis\t${sv1 == sv2}`);
    console.log(`$ "${sv1}" != "${sv2}"\tis\t${sv1 != sv2}`);

    sv2 = 'string1'

    console.log(`$ "${sv1}" == "${sv2}"\tis\t${sv1 == sv2}`);
    console.log(`$ "${sv1}" != "${sv2}"\tis\t${sv1 != sv2}`);

    console.log(`$ "${sv1}" === "${sv2}"\tis\t${sv1 === sv2}`);
    console.log(`$ "${sv1}" !== "${sv2}"\tis\t${sv1 !== sv2}`);

    console.groupEnd()

}

function demoCompare4() {
    console.group("Comparisions - Accross Types (== & ===)")

    let sv1 = 1;
    let sv2 = '1';
    console.log(`$ let sv1 = 1\n\tsv2 = '1'`)

    console.log(`$ sv1 == sv2\n\t${sv1 == sv2}`);
    console.log(`$ sv1 === sv2\n\t${sv1 === sv2}`);

    sv1 = "true"
    console.log(`$ sv1 = "true"\n\tsv1 = ${sv1}`)
    sv2 = true
    console.log(`$ sv2 = true\n\tsv2 = ${sv2}`)

    console.log(`$ sv1 == sv2\n\t${sv1 == sv2}`);
    console.log(`$ sv1 === sv2\n\t${sv1 === sv2}`);

    console.log(`1 == '1'\t${1 == '1'}`)
    console.log(`1 === '1'\t${1 === '1'}`)

    console.log(`true == 1\t${true == 1}`)
    console.log(`true === 1\t${true === 1}`)

    console.log(`true == '1'\t${true == '1'}`)
    console.log(`true === '1'\t${true === '1'}`)

    console.groupEnd()
}

function demoTruthy() {
    console.group("Truthy")
    let isTruthy = (currentArgument) => currentArgument ? 'Yes. This is a Truth Value' : 'No. This is a False Value'
    console.log(`let isTruthy = (currentArgument) => currentArgument ? 'Yes. This is a Truth Value' : 'No. This is a False Value'`)

    console.log(`$ isTruthy(true)        ${isTruthy(true)}`)
    console.log(`$ isTruthy(1)           ${isTruthy(1)}`)
    console.log(`$ isTruthy(-1)          ${isTruthy(-1)}`)
    console.log(`$ isTruthy(Infinity)    ${isTruthy(Infinity)}`)
    console.log(`$ isTruthy(-Infinity)   ${isTruthy(-Infinity)}`)
    console.log(`$ isTruthy("   ")       ${isTruthy("   ")}`)
    console.groupEnd()
}

function demoFalsy() {
    console.group("Falsy")
    let isTruthy = (currentArgument) => currentArgument ? 'Yes. This is a Truth Value' : 'No. This is a False Value'
    console.log(`let isTruthy = (currentArgument) => currentArgument ? 'Yes. This is a Truth Value' : 'No. This is a False Value'`)

    console.log(`$ isTruthy(false)       ${isTruthy(false)}`)
    console.log(`$ isTruthy(0)           ${isTruthy(0)}`)
    console.log(`$ isTruthy(-0)          ${isTruthy(-0)}`)
    console.log(`$ isTruthy(null)        ${isTruthy(null)}`)
    console.log(`$ isTruthy(undefined)   ${isTruthy(undefined)}`)
    console.log(`$ isTruthy(NaN)         ${isTruthy(NaN)}`)
    console.log(`$ isTruthy("")          ${isTruthy("")}`)
    console.groupEnd()
}
