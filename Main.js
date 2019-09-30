import { CardValue, Suit } from './Cards'
import { times } from 'ramda'

//picks randon object key
const ranOb = (ob) => Object.keys(ob)[Math.random() * (Object.keys(ob).length) << 0]

/**
 * Eg: drawCard(CardValue.Two, Suit.Clubs)
 * if no arguments then randon keys generated
 */
const drawCard = (value = ranOb(CardValue), suit = ranOb(Suit)) => ({ CardValue: value, Suit: suit })
const toWords =(card) => `${card.CardValue} of ${card.Suit}`

const hand = times(() => drawCard(), 5)

const isFlush = (f) => f.every(x => x.Suit == f[0].Suit)
const isAStraight = () => true
const isRoyalFlush = () => true


export { drawCard, toWords, isFlush, isAStraight, isRoyalFlush }





