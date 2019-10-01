const SuitEnum = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const CardValueEnum = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}
const straight =
    [{ CardValue: 'Jack', Suit: 'Spades' },
    { CardValue: 'Ace', Suit: 'Clubs' },
    { CardValue: 'Queen', Suit: 'Hearts' },
    { CardValue: 'King', Suit: 'Spades' },
    { CardValue: 'Ten', Suit: 'Spades' }]

const isFlush = (f) => f.every(x => x.Suit == f[0].Suit)

const one = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(CardValueEnum)
        .find(k => CardValueEnum[card] === k))

const two = [11, 14, 12, 13, 10].sort((a, b) => a - b)

const three = two.every((x, i, a) => i == a.length - 1 ? x == a[i - 1] + 1 : x == a[i + 1] - 1) // Is the array a series
two
three
const d = one(straight)
d


const isit = [ 10, 11, 12, 13, 14 ].every((x, i, a) => i == a.length - 1 ? x == a[i - 1] + 1 : x == a[i + 1] - 1)
isit