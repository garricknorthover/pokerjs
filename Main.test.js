import { CardValue, Suit } from './Cards'
import { drawCard, toWords } from './Main'

test('converts cards to words', () => {
    expect(toWords(drawCard('Ace', 'Clubs'))).toBe("Ace of Clubs")
})

