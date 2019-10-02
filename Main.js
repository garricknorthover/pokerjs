import { times } from 'ramda'
import { cardValueEnum, suitEnum } from './cards'
import { ranOb } from './util'


const drawCard = (value = ranOb(cardValueEnum), suit = ranOb(suitEnum)) => ({ CardValue: value, Suit: suit })
const toWords = (card) => `${card.CardValue} of ${card.Suit}`

const hand = times(() => drawCard(), 5)


export {drawCard, toWords}





