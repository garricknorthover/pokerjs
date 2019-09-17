const Suit = { hearts: "Hearts", spades: "Spades", diamonds: "Diamonds", clubs: "Clubs" }
const CardValue = {
    one: "One",
    two: "Two",
    three: "Three",
    four: "Four",
    five: "Five",
    six: "Six",
    seven: "Seven",
    eight: "Eight",
    nine: "Nine",
    ten: "Ten",
    jack: "Jack",
    queen: "Queen",
    king: "King",
    ace: "Ace"
}
const Card = (value, suit) => `${value} of ${suit}`
const SuitKeys = Object.keys(Suit)
const ValueKeys = Object.keys(CardValue)
SuitKeys
ValueKeys

const RandomSuitKey = SuitKeys[Math.random() * 4 << 0]
const RandomValueKey = ValueKeys[Math.random() * 14 << 0]

RandomSuitKey
RandomValueKey

const RandomCard = () => Card(RandomValueKey, RandomSuitKey)
const RandomDraw = RandomCard()
RandomDraw
