const SuitEnum = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const CardValueEnum = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}


const isFlush = (f) => f.every(x => x.Suit == f[0].Suit)

const toObjValues = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(CardValueEnum)
        .find(cardRef => CardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)

const isAStraight = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(CardValueEnum)
        .find(cardRef => CardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)
    .every((x, indx, arr) => indx == arr.length - 1 ? x == arr[indx - 1] + 1 : x == arr[indx + 1] - 1)

const isStraightFlush = (ob) => isFlush(ob) && isAStraight(ob)
const isRoyalFlush = (ob) => isStraightFlush()


const findHighcard = (ob) => Object.keys(CardValueEnum)[ toObjValues(ob).slice(-1) -2]
  

const h = findHighcard([{ CardValue: 'Queen', Suit: 'Clubs' },
{ CardValue: 'Ace', Suit: 'Clubs' },
{ CardValue: 'King', Suit: 'Clubs' },
{ CardValue: 'Jack', Suit: 'Clubs' },
{ CardValue: 'Ten', Suit: 'Clubs' }])
h