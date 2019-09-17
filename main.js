const {CardValue, Suit} = require('./Cards')

const RandomSuit = Object.values(Suit)[Math.random() * 4 << 0]
const RandomCardValue = Object.values(CardValue)[Math.random() * 14 << 0]

const RandomCard =`${RandomCardValue} of ${RandomSuit}`

console.log(RandomCard)




