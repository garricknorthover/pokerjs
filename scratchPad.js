import { times } from 'ramda'
const Suit = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const CardValue = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}

//picks randon object key
const ranOb = (ob) => Object.keys(ob)[Math.random() * (Object.keys(ob).length) << 0]

/**
 * Eg: drawCard(CardValue.Two, Suit.Clubs)
 * if no arguments then randon keys generated
 */
const drawCard = (value = ranOb(CardValue), suit = ranOb(Suit)) => ({ CardValue: value, Suit: suit })
const toWords =(card) => `${card.CardValue} of ${card.Suit}`

const hand = times(() => toWords(drawCard()), 5)


console.log(hand)


   