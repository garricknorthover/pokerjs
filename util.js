import { cardValueEnum, suitEnum } from './cards'

const toObjValues = (ob) => ob.map(x => x.card).map(v => cardValueEnum[v]).sort((a, b) => a - b)

const ofSameKind = (cards) => {
    const theSet = toObjValues(cards)
    return [... new Set(theSet)].map(x => theSet.filter((y) => x == y).length).reverse()
}

let deck = Object.keys(suitEnum)
    .map(x => Object.keys(cardValueEnum).map(y => ({ card: y, suit: x })))
    .flat()
    .sort((a, b) => 0.5 - Math.random())// quick and dirty random shuffle

const hand = () => deck.splice(0, 5)


export { toObjValues, ofSameKind, deck, hand }
