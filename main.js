import { CardValue, Suit } from './Cards'

const randomSuit = Object.values(Suit)[Math.random() * 4 << 0]
const randomCardValue = Object.values(CardValue)[Math.random() * 14 << 0]

const cardTitle = (value, suit) => `${value} of ${suit}`

const randomCard = cardTitle(randomCardValue, randomSuit)

console.log(randomCard)

export {cardTitle}




