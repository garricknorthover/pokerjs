import { CardValue, Suit } from './Cards'
import { toTitle, drawCard } from './Main'

test('converts cards to words', () => {
    expect(toTitle(drawCard(CardValue.ace, Suit.clubs))).toBe("Ace of Clubs")
})

