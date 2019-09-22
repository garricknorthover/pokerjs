import { times } from 'ramda'
const Suit = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const CardValue = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}

const randomSuit = () => Object.keys(Suit)[Math.random() * 4 << 0]
const randomCardValue = () => Object.keys(CardValue)[2 + Math.random() * 13 << 0]

const drawCard = (value, suit) => ({ CardValue: value, Suit: suit })

const toTitle = (card) => `${card.CardValue} of ${card.Suit}`

const hand = times(() => drawCard(randomCardValue(), randomSuit()), 5)

console.log(hand.map(x => toTitle(x)))