import { CardValue, Suit } from './Cards'
import { times } from 'ramda'

//picks randon object key
const ranOb = (ob) => Object.keys(ob)[Math.random() * (Object.keys(ob).length) << 0]

/**
 * Eg: drawCard(CardValue.Two, Suit.Clubs)
 * if no arguments then randon keys generated
 */
const drawCard = (value = ranOb(CardValue), suit = ranOb(Suit)) => ({ CardValue: value, Suit: suit })

const hand = times(() => drawCard(), 5)
    .map(card => `${card.CardValue} of ${card.Suit}`)


console.log(hand)


export { drawCard }





