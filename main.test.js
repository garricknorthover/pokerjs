import { cardTitle } from './Main'
import { CardValue, Suit } from './Cards'
  
test('converts cards to words', () => {
    expect(cardTitle(CardValue.ace, Suit.clubs)).toBe("Ace of Clubs")
})
