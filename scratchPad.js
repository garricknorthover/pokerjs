import { countBy } from 'ramda'
const suitEnum = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const cardValueEnum = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}


const three =
    [{ CardValue: 'Ten', Suit: 'Clubs' },
    { CardValue: 'Ten', Suit: 'Hearts' },
    { CardValue: 'Three', Suit: 'Clubs' },
    { CardValue: 'Three', Suit: 'Diamonds' },
    { CardValue: 'Ten', Suit: 'Clubs' }]

// const twoPair =
//     [{ CardValue: 'Two', Suit: 'Clubs' },
//     { CardValue: 'Five', Suit: 'Hearts' },
//     { CardValue: 'Five', Suit: 'Clubs' },
//     { CardValue: 'Nine', Suit: 'Diamonds' },
//     { CardValue: 'Nine', Suit: 'Clubs' }]
const = ( {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, [j]: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}) ={ ...cardValueEnum}
j

Three


// const toObjValues = (hand) => hand.map(x => x.CardValue).map(v => cardValueEnum[v]).sort()

// const isAStraight = (ob) => toObjValues(ob).every((x, indx, arr) => indx == arr.length - 1 ? x == arr[indx - 1] + 1 : x == arr[indx + 1] - 1)
// const findHighcard = (ob) => toObjValues(ob).slice(0,1).find(x => Object.keys(cardValueEnum)[x] == x)
// const s = findHighcard(three)
// s
// const a = toObjValues(three)
// a
// const b = (a) => [... new Set(a)].map(x => a.filter((y) => x == y).length).reverse()
// b
// const c = b(a)
// c


// const ofAKind = (obj) => Object.values(countBy(Math.floor)(toObjValues(obj))).sort((a,b) => b - a)

// const isFourKind = (obj) => ofAKind(obj)[0] === 4 
// const isThreeKind = (obj) => ofAKind(obj)[0] === 3 && ofAKind(obj)[1] !== 2
// const isTwoPair = (obj) => (ofAKind(obj)[0] && ofAKind(obj)[1]) === 2
// const isFullHouse = (obj) => ofAKind(obj)[0] === 3 && ofAKind(obj)[1] === 2
// const r = isTwoPair(twoPair)

// r
// const t = isFullHouse(three)
// t



