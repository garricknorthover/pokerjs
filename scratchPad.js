import { countBy} from 'ramda'
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


const toObjValues = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(CardValueEnum).find(cardRef => CardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)

const ofAKind = (obj) => Object.values(countBy(Math.floor)(toObjValues(obj))).sort((a,b) => b - a)

const isFourKind = (obj) => ofAKind(obj)[0] === 4 
const isThreeKind = (obj) => ofAKind(obj)[0] === 3 && ofAKind(obj)[1] !== 2
const isTwoPair = (obj) => (ofAKind(obj)[0] && ofAKind(obj)[1]) === 2
const isFullHouse = (obj) => ofAKind(obj)[0] === 3 && ofAKind(obj)[1] === 2
const r = isTwoPair(twoPair)

r
const t = isFullHouse(three)
t



