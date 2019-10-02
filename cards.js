const suitEnum = { Hearts: 1, Spades: 2, Diamonds: 3, Clubs: 4 }
const cardValueEnum = {
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
}

const toObjValues = (ob) => ob.map(c => c.CardValue)
    .map(card => Object.values(cardValueEnum).find(cardRef => cardValueEnum[card] === cardRef))
    .sort((a, b) => a - b)

const ofKind = (obj) => Object.values(countBy(Math.floor)(toObjValues(obj))).sort((a, b) => b - a)

export { suitEnum, cardValueEnum }

