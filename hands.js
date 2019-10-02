import { cardValueEnum } from './cards'
import { toObjValues, ofKind } from './util'


const isFlush = (f) => f.every(x => x.Suit == f[0].Suit)
const isAStraight = (ob) => toObjValues(ob).every((x, indx, arr) => indx == arr.length - 1 ? x == arr[indx - 1] + 1 : x == arr[indx + 1] - 1)
const findHighcard = (ob) => Object.keys(cardValueEnum)[toObjValues(ob).slice(-1) - 2]
const isStraightFlush = (ob) => isFlush(ob) && isAStraight(ob)
const isRoyalFlush = (ob) => isStraightFlush(ob) && findHighcard(ob) === 'Ace'
const isFourKind = (obj) => ofKind(obj)[0] === 4
const isThreeKind = (obj) => ofKind(obj)[0] === 3 && ofKind(obj)[1] !== 2
const isTwoPair = (obj) => (ofKind(obj)[0] && ofKind(obj)[1]) === 2
const isFullHouse = (obj) => ofKind(obj)[0] === 3 && ofKind(obj)[1] === 2
const isPair = (obj) => ofKind(obj)[0] === 2 && ofKind(obj)[1] === 1

export {
    isFlush, isAStraight,
    findHighcard, isStraightFlush, isRoyalFlush, isFourKind,
    isThreeKind, isTwoPair, isFullHouse, isPair
}