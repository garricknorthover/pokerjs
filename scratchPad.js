import {countBy} from 'Ramda'
const SuitEnum = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const CardValueEnum = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}


const str =
    [{ CardValue: 'Queen', Suit: 'Clubs' },
    { CardValue: 'Nine', Suit: 'Hearts' },
    { CardValue: 'King', Suit: 'Clubs' },
    { CardValue: 'Jack', Suit: 'Diamonds' },
    { CardValue: 'Ten', Suit: 'Clubs' }]

const four =
    [{ CardValue: 'Nine', Suit: 'Clubs' },
    { CardValue: 'Nine', Suit: 'Hearts' },
    { CardValue: 'Nine', Suit: 'Clubs' },
    { CardValue: 'Nine', Suit: 'Diamonds' },
    { CardValue: 'Ten', Suit: 'Clubs' }]


const toObjValues = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(CardValueEnum).find(cardRef => CardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)

const isFourKind = (obj) => Object.values(countBy(Math.floor,toObjValues(obj)))[0] == 4 ? true : false

const r = isFourKind(four)
r


