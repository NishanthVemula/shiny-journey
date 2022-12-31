import { generateLogDemoObject } from "../../../Utils/utils.js";

const logDemoOptions = { withCode: true, collapseLog: false }

const demoComputedProperties = () => {

	console.group("[ Basic]")
	const key1 = "someKey1"
	const key2 = "someKey2"

	const value1 = "someValue1"
	const value2 = 456

	let someObject1 = {}
	someObject1[key1] = value1
	someObject1[key2] = value2
	let someObject2 = {
		[key1]: value1,
		[key2]: value2
	}

	console.log(someObject1)
	console.log(someObject2)

	console.groupEnd()

	console.group("[ Example ]")
	function addPropToObject(obj, propKey, propValue) {
		const copy = {
			...obj
		}
		copy[propKey] = propValue
		return copy
	}

	let addPropToObject2 = (obj, propKey, propValue) => ({ ...obj, [propKey]: propValue })
	console.log(`addPropToObject({ a: 1 }, b, 23)`, addPropToObject({ a: 1 }, "b", 23))
	console.log(`addPropToObject2({ a: 1 }, b, 23)`, addPropToObject2({ a: 1 }, "b", 23))

	console.groupEnd()
}

const demoObjectMethods = () => {
	const myMathObject = {
		key1: 'Val1',
		key2: 789,
		add: function (a, b) { return a + b },
		diff: function (a, b) { Math.abs(a - b) },
		multiply: function (a, b) { return a * b },
		divide: function (a, b) { return a / b }
	}
	console.log(`myMathObject is: `, myMathObject)
	console.log(`myMathObject.add(2, 3) is: ${myMathObject.add(2, 3)}`)
	console.log(`myMathObject.diff(2, 3) is: ${myMathObject.diff(2, 3)}`)
	console.log(`myMathObject.multiply(2, 3) is: ${myMathObject.multiply(2, 3)}`)
	console.log(`myMathObject.divide(2, 3) is: ${myMathObject.divide(2, 3)}`)
}

const demoObjectMethods2 = () => {
	const myMathObject = {
		key1: 'Val1',
		key2: 789,
		add(a, b) { return a + b },
		diff(a, b) { Math.abs(a - b) },
		multiply(a, b) { return a * b },
		divide(a, b) { return a / b }
	}
	console.log(`myMathObject is: `, myMathObject)
}

const demoThis = () => {
	const person = {
		firstName: "fName",
		lastName: "lName",
		nickName: "nName",
		fullName() {
			console.log(this)
		},
		fullName2: function () {
			console.log(this)
		},
		fullName3: () => {
			console.log(this)
		},
	}

	console.log(person)
	person.fullName()
	person.fullName2()
	person.fullName3()
}

const demoThis2 = () => {
	const object1 = {

		method0: function () {
			console.log("\t- this inside object1.method0 is: ", this)

			const method0_0 = function () {
				console.log("\t\tthis inside object1.method0 > method0_0 is: ", this)
			}

			function method0_1() {
				console.log("\t\tthis inside object1.method0 > method0_1 is: ", this)
			}

			const method0_2 = () => {
				console.log("\t\tthis inside object1.method0 > method0_2 is: ", this)
			}
			method0_0()
			method0_1()
			method0_2()
		},
		method1() {
			console.log("\t- this inside object1.method1 is: ", this)

			const method1_0 = function () {
				console.log("\t\tthis inside object1.method1 > method1_0 is: ", this)
			}

			function method1_1() {
				console.log("\t\tthis inside object1.method1 > method1_1 is: ", this)
			}

			const method1_2 = () => {
				console.log("\t\tthis inside object1.method1 > method1_2 is: ", this)
			}
			method1_0()
			method1_1()
			method1_2()
		},
		method2: () => {
			console.log("\t- this inside object1.method2 is: ", this)

			const method2_0 = function () {
				console.log("\t\tthis inside object1.method1 > method2_0 is: ", this)
			}

			function method2_1() {
				console.log("\t\tthis inside object1.method2 > method2_1 is: ", this)
			}

			const method2_2 = () => {
				console.log("\t\tthis inside object1.method2 > method2_2 is: ", this)
			}
			method2_0()
			method2_1()
			method2_2()
		},
	}
	console.log("this inside demoThis is: ", this)
	console.log('\t- object1 is: ', object1)
	console.log(`- object1.methodName :::::`)
	object1.method0()
	object1.method1()
	object1.method2()

	console.log(`- object1 methods by Destructuring :::::`)
	let { method0, method1, method2 } = object1;
	method0()
	method1()
	method2()
}

generateLogDemoObject('demoComputedProperties', "[ Computed Properties ]", demoComputedProperties, logDemoOptions)
generateLogDemoObject('demoObjectMethods', "[ Object Methods ]", demoObjectMethods, logDemoOptions)
generateLogDemoObject('demoObjectMethods2', "[ Object Methods - Shorthand ]", demoObjectMethods2, logDemoOptions)
generateLogDemoObject('demoThis', "[ This ]", demoThis, logDemoOptions)
generateLogDemoObject('demoThis2', "[ This - Invocation Context ]", demoThis2, logDemoOptions)

function demoThisDeckOfCards() {
	console.group("[ Make Deck ]")
	function makeDeck() {
		let suits = ["spades", "clubs", "hearts", "diamonds"]
		let cardNums = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',')

		let deck = []
		for (let suit of suits) {
			for (let value of cardNums) {
				deck.push({ value, suit })
			}
		}

		return deck
	}

	let someDeck = makeDeck()
	console.log(`let someDeck = makeDeck() :::::`)
	someDeck.forEach(card => console.log("\t- ", JSON.stringify(card)))
	console.groupEnd()


	console.group("[ Make Deck 2 ]")
	const makeDeck2 = () => ({
		deck: [],
		drawnCards: [],
		suits: ["spades", "clubs", "hearts", "diamonds"],
		cardNums: 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(','),
		initDeck() {
			const { suits, deck, cardNums } = this;
			for (let suit of suits) {
				for (let value of cardNums) {
					deck.push({ value, suit })
				}
			}
		},
		drawCard() {
			const { deck, drawnCards } = this;
			if (deck.length == 0) {
				throw `deck is empty`;
			}
			const currentDrawnCard = deck.pop()
			drawnCards.push(currentDrawnCard)
			return currentDrawnCard;

		},
		drawCards(num) {
			const { deck } = this;
			if (deck.length < num) {
				throw `not enough cards in deck to draw ${num} cards`
			}
			const currentDrawnCards = [];
			while (num > 0) {
				currentDrawnCards.push(this.drawCard());
				num--;
			}
			return currentDrawnCards;
		},
		shuffleCards() {
			const { deck } = this;
			let i = deck.length;
			while (--i > 0) {
				let temp = Math.floor(Math.random() * (i + 1));
				[deck[temp], deck[i]] = [deck[i], deck[temp]];
			}
		}
	})

	let myDeck = makeDeck2();
	console.log(`- myDeck is :::::`, myDeck)
	myDeck.initDeck();
	console.log(`- initialize myDeck :::::`, myDeck)
	myDeck.shuffleCards()
	console.log(`- shuffle myDeck :::::`, myDeck)
	let hand1 = myDeck.drawCards(2)
	let hand2 = myDeck.drawCards(2)
	let pokerHand = myDeck.drawCards(5)
	console.log(`- drawing two hands and a pokerHand`)
	console.log(`\t- hand1 :::::`, hand1)
	console.log(`\t- hand2 :::::`, hand2)
	console.log(`\t- pokerHand :::::`, pokerHand)
	console.log(`\t- myDeck :::::`, myDeck)
	console.groupEnd()
}

generateLogDemoObject('demoThisDeckOfCards', "[ This - Deck Of Cards ]", demoThisDeckOfCards, logDemoOptions)
