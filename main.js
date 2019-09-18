import {CardValue, Suit} from './Cards'

const RandomSuit = Object.values(Suit)[Math.random() * 4 << 0]
const RandomCardValue = Object.values(CardValue)[Math.random() * 14 << 0]

const Card = (value, suit) => `${value} of ${suit}`

const RandomCard = Card(RandomCardValue, RandomSuit)

console.log(RandomCard)




