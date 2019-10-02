import { cardValueEnum } from './cards'
import { countBy } from 'ramda'

const toObjValues = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(cardValueEnum).find(cardRef => cardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)

const ofKind = (obj) => Object.values(countBy(Math.floor)(toObjValues(obj))).sort((a, b) => b - a)

//picks randon object key
const ranOb = (ob) => Object.keys(ob)[Math.random() * (Object.keys(ob).length) << 0]

export { toObjValues, ofKind, ranOb }
