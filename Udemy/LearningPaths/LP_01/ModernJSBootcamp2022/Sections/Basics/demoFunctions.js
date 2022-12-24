import { generateLogDemoObject } from "../../Utils/utils.js";

const logDemoOptions = { withCode: false, collapseLog: false }
let order = 10

const demoFunctions1 = () => {
    const isValidPassword = (password, username) => {
        // Password length must be greater than 8
    
        if (!username || ((typeof username) != "string") || username.length <= 0) {
            // invalid user name
            return false;
        }
        if (!password || ((typeof password) != "string")) {
            // invalid password
            return false;
        }
    
        if(password.length < 8) {
            // password too short
            return false;
        }
    
        // has space (or) too similar to username
        return (password.indexOf(" ") < 0 && password.indexOf(username) < 0)
    }

    console.log(`isValidPassword("asf", "dogLuvr") >>>> `, isValidPassword("asf", "dogLuvr"))
    console.log(`isValidPassword("asfasfa sdfasdf", "dogLuvr") >>>> `, isValidPassword("asfasfa sdfasdf", "dogLuvr"))
    console.log(`isValidPassword("asdasfdogLuvr", "dogLuvr") >>>> `, isValidPassword("asdasfdogLuvr", "dogLuvr"))
    console.log(`isValidPassword("asfasfasdfasdf", "dogLuvr") >>>> `, isValidPassword("asfasfasdfasdf", "dogLuvr"))
}

const demoFunctions2 = () => {
    const averageOfNumbers = (...args) => {
        if(args.length > 0)
            return (args.reduce((p, c, i) => {
                return p+c;
            }, 0))/args.length
        else
            return 0
    }
    console.log(`averageOfNumbers(1,2,3,4,5)`, averageOfNumbers(1,2,3,4,5)); // 3
    console.log(`averageOfNumbers()`, averageOfNumbers()); // 0
    console.log(`averageOfNumbers(1,1,2,2,3,3,4,4,5,5)`, averageOfNumbers(1,1,2,2,3,3,4,4,5,5)); // 3

}

const demoFunctions3 = () => {
    // Check if letter contains every letter of alphabet
    const isPangram = (arg) => {
        let lowerCasedArg = arg.toLowerCase();
        for (const c of "abcdefghijklmnopqrstuvwxyz") {
            if(!lowerCasedArg.includes(c))
                return false;
        }
        return true
    }

    console.log(`isPangram("abcdefghijklmnopqrstuvwxyz") >>>>> `, isPangram("abcdefghijklmnopqrstuvwxyz")) // true
    console.log(`isPangram("abcdefghijklmnoprstuvwxyz") >>>>> `, isPangram("abcdefghijklmnoprstuvwxyz")) // false
}

const demoFunctions4 = () => {
    /* 
        return random playing card
            - 2 3 4 5 6 7 8 9 10 J Q K A
            - clubs spades earts diamonds
            - in a js object
    */
    const getCard = () => {
        let pick = (argArray) => argArray[Math.floor(Math.random() * argArray.length)]

        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
        let suits = ["clubs", "Spades", "hearts", "diamonds"]
        return {
            value: pick(values),
            suit: pick(suits)
        }
    }

    for(let i = 0; i < 25; i++) {
        console.log(`getCard() >>>>> `, getCard())
    }
    
}

generateLogDemoObject('demoFunctions1',     "[ Password Validator ]",   demoFunctions1,     logDemoOptions)
generateLogDemoObject('demoFunctions2',     "[ Average Values ]",       demoFunctions2,     logDemoOptions)
generateLogDemoObject('demoFunctions3',     "[ Pangrams ]",             demoFunctions3,     logDemoOptions)
generateLogDemoObject('demoFunctions4',     "[ get card ]",             demoFunctions4,     logDemoOptions)
