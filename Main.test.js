import { CardValue, Suit } from './Cards'
import { drawCard } from './Main'

test('converts cards to words', () => {
    expect(drawCard(CardValue.ace, Suit.clubs)).toBe("Ace of Clubs")
})

