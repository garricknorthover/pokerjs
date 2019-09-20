import { CardValue, Suit } from './Cards'
import { times } from 'ramda'


const randomSuit = () => Object.values(Suit)[Math.random() * 4 << 0]
const randomCardValue = () => Object.values(CardValue)[Math.random() * 14 << 0]

const drawCard = (value, suit) => ({ CardValue: value, Suit: suit })

const toTitle = (card) => `${card.CardValue} of ${card.Suit}`

const hand = times(() => drawCard(randomCardValue(), randomSuit()), 5)

console.log(hand.map(x => toTitle(x)))


export { toTitle, drawCard }





