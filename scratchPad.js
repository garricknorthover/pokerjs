import { countBy } from 'ramda'
import { Z_FILTERED } from 'zlib'
const SuitEnum = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const CardValueEnum = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}


const three =
    [{ CardValue: 'Ten', Suit: 'Clubs' },
    { CardValue: 'Ten', Suit: 'Hearts' },
    { CardValue: 'Three', Suit: 'Clubs' },
    { CardValue: 'Three', Suit: 'Diamonds' },
    { CardValue: 'Ten', Suit: 'Clubs' }]

const twoPair =
    [{ CardValue: 'Two', Suit: 'Clubs' },
    { CardValue: 'Five', Suit: 'Hearts' },
    { CardValue: 'Five', Suit: 'Clubs' },
    { CardValue: 'Nine', Suit: 'Diamonds' },
    { CardValue: 'Nine', Suit: 'Clubs' }]


// const a = Object.values(twoPair)
// a
const toObjValues = (hand) => hand.map(x => x.CardValue).map(v => CardValueEnum[v]).sort((a, b) => a - b)

const a = toObjValues(twoPair)
a

const c =  [... new Set(a)].map(z => a.filter(x => x == z).length).sort((a, b) => b - a)
c


// const ofAKind = (obj) => Object.values(countBy(Math.floor)(toObjValues(obj))).sort((a,b) => b - a)

// const isFourKind = (obj) => ofAKind(obj)[0] === 4 
// const isThreeKind = (obj) => ofAKind(obj)[0] === 3 && ofAKind(obj)[1] !== 2
// const isTwoPair = (obj) => (ofAKind(obj)[0] && ofAKind(obj)[1]) === 2
// const isFullHouse = (obj) => ofAKind(obj)[0] === 3 && ofAKind(obj)[1] === 2
// const r = isTwoPair(twoPair)

// r
// const t = isFullHouse(three)




