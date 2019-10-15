import { times } from 'ramda'
import { cardValueEnum, suitEnum } from './cards'

const toObjValues = (ob) => ob.map(x => x.card).map(v => cardValueEnum[v]).sort((a, b) => a - b)


const ofSameKind = (cards) => {
    const theSet = toObjValues(cards)
    return [... new Set(theSet)].map(x => theSet.filter((y) => x == y).length).reverse()
}
const deck = Object.keys(suitEnum)
    .map(x => Object.keys(cardValueEnum).map(y => ({ card: y, suit: x })))
    .flat()//?

const randomCard = () => deck.length * Math.random() << 0

const drawCard = () => deck.splice(randomCard(), 1)

const hand = () => times(() => drawCard(), 5).flat()




export { toObjValues, ofSameKind, deck, hand }
