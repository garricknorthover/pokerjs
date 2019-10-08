import {isAStraight} from './hands'
import {cardValueEnum} from './cards'
import {toObjValues} from './util'

const stra = [{ CardValue: 'Queen', Suit: 'Clubs' },
{ CardValue: 'Nine', Suit: 'Hearts' },
{ CardValue: 'King', Suit: 'Clubs' },
{ CardValue: 'Jack', Suit: 'Diamonds' },
{ CardValue: 'Ten', Suit: 'Clubs' }]//?

const findHighcard = (ob) => Object.keys(cardValueEnum)[toObjValues(ob)//?
    .slice(-1) - 2]

findHighcard(stra)//?
