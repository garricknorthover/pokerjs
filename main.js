import { times } from 'ramda'
import { cardValueEnum, suitEnum } from './cards'
import { ranOb } from './util'

const deck = Object.keys(suitEnum)
    .map(x => Object.keys(cardValueEnum).map(y => ([y, x])))
    .flat()

const randomCard = () => deck.length * Math.random() << 0

const drawCard = () => deck.splice(randomCard(), 1)

const toWords = (card) => `${card[0]} of ${card[1]}`
const hand = () => times(() => drawCard(), 5).flat()

// hand().map(x => toWords(x))//?
hand()//?

deck//?

export { drawCard, toWords }





