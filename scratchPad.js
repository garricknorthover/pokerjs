import { countBy} from 'ramda'
const SuitEnum = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const CardValueEnum = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}


const three =
    [{ CardValue: 'Ten', Suit: 'Clubs' },
    { CardValue: 'Three', Suit: 'Hearts' },
    { CardValue: 'Three', Suit: 'Clubs' },
    { CardValue: 'Three', Suit: 'Diamonds' },
    { CardValue: 'Ten', Suit: 'Clubs' }]

const four =
    [{ CardValue: 'Two', Suit: 'Clubs' },
    { CardValue: 'Nine', Suit: 'Hearts' },
    { CardValue: 'Nine', Suit: 'Clubs' },
    { CardValue: 'Nine', Suit: 'Diamonds' },
    { CardValue: 'Nine', Suit: 'Clubs' }]


const toObjValues = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(CardValueEnum).find(cardRef => CardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)

const ofAKind = (obj, num) => Object.values(countBy(Math.floor)(toObjValues(obj))).sort((a,b) => b - a)[0] === num ? true : false

const isFourKind = (obj) => ofAKind(obj, 4)
const isThreeKind = (obj) => ofAKind(obj, 3)
const r = isFourKind(four)

r
const t = isThreeKind(three)
t

const o = toObjValues(three)
const p = countBy(Math.floor, [ 10, 10, 1, 4, 2 ] )
o
console.log(Object.values(p).sort((a,b) => b - a)[0]);

