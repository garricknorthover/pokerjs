import { cardValueEnum } from './cards'

const toObjValues = (hand) => hand.map(x => x.CardValue).map(v => cardValueEnum[v]).sort((a, b) => a - b)


const ofKind = (hand) => {
    const theSet = toObjValues(hand)
    return [... new Set(theSet)].map(x => theSet.filter((y) => x == y).length).reverse()
}

//picks randon object key
const ranOb = (ob) => Object.keys(ob)[Math.random() * (Object.keys(ob).length) << 0]
[ [ 'Five', 'Hearts' ], 
  [ 'Four', 'Diamonds' ], 
  [ 'Four', 'Hearts' ], 
  [ 'Queen', 'Spades' ], 
  [ 'Ace', 'Diamonds' ] ]
export { toObjValues, ofKind, ranOb }
