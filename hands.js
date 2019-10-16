import { cardValueEnum } from './cards'
import { toObjValues, ofSameKind } from './util'


const isFlush = (f) => f.every(x => x.suit == f[0].suit)

const isAStraight = (ob) => toObjValues(ob).every((x, indx, arr) => indx == arr.length - 1 ? x == arr[indx - 1] + 1 : x == arr[indx + 1] - 1)

const findHighcard = (ob) => Object.keys(cardValueEnum)[toObjValues(ob).slice(-1) - 2]

const isStraightFlush = (ob) => isFlush(ob) && isAStraight(ob)

const isRoyalFlush = (ob) => isStraightFlush(ob) && findHighcard(ob) === 'Ace'

const isFourKind = (obj) => ofSameKind(obj)[0] === 4

const isThreeKind = (obj) => ofSameKind(obj)[0] === 3 && ofSameKind(obj)[1] !== 2

const isTwoPair = (obj) => (ofSameKind(obj)[0] && ofSameKind(obj)[1]) === 2

const isFullHouse = (obj) => ofSameKind(obj)[0] === 3 && ofSameKind(obj)[1] === 2

const isPair = (obj) => ofSameKind(obj)[0] === 2 && ofSameKind(obj)[1] === 1



export {
  isFlush, isAStraight,
  findHighcard, isStraightFlush, isRoyalFlush, isFourKind,
  isThreeKind, isTwoPair, isFullHouse, isPair
}