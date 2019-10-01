import { CardValueEnum, SuitEnum } from './Cards'
import { times } from 'ramda'

//picks randon object key
const ranOb = (ob) => Object.keys(ob)[Math.random() * (Object.keys(ob).length) << 0]

/**
 * Eg: drawCard(CardValue.Two, Suit.Clubs)
 * if no arguments then randon keys generated
 */
const drawCard = (value = ranOb(CardValueEnum), suit = ranOb(SuitEnum)) => ({ CardValue: value, Suit: suit })
const toWords = (card) => `${card.CardValue} of ${card.Suit}`

const hand = times(() => drawCard(), 5)

const isFlush = (f) => f.every(x => x.Suit == f[0].Suit)

const toObjValues = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(CardValueEnum)
        .find(cardRef => CardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)

const isAStraight = (ob) => toObjValues(ob)
    .every((x, indx, arr) => indx == arr.length - 1 ? x == arr[indx - 1] + 1 : x == arr[indx + 1] - 1)

const findHighcard = (ob) => Object.keys(CardValueEnum)[toObjValues(ob).slice(-1) - 2]

const isStraightFlush = (ob) => isFlush(ob) && isAStraight(ob)
const isRoyalFlush = (ob) => isStraightFlush(ob) && findHighcard(ob) === 'Ace'


export { drawCard, toWords, isFlush, isAStraight, findHighcard, isStraightFlush, isRoyalFlush }





