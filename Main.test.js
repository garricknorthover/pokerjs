import { drawCard, toWords, isFlush, isAStraight, isRoyalFlush } from './Main'

test('converts cards to words', () => {
    expect(toWords(drawCard('Ace', 'Clubs'))).toBe('Ace of Clubs')
})



test('if all the same suit, is a flush', () =>
    expect(isFlush(
        [{ CardValue: 'Queen', Suit: 'Clubs' },
        { CardValue: 'Five', Suit: 'Clubs' },
        { CardValue: 'Six', Suit: 'Clubs' },
        { CardValue: 'Six', Suit: 'Clubs' },
        { CardValue: 'Queen', Suit: 'Clubs' }])).toBe(true))

test('test for a straight', () =>
    expect(isAStraight(
        [{ CardValue: 'Queen', Suit: 'Clubs' },
        { CardValue: 'Nine', Suit: 'Hearts' },
        { CardValue: 'King', Suit: 'Clubs' },
        { CardValue: 'Jack', Suit: 'Diamonds' },
        { CardValue: 'Ten', Suit: 'Clubs' }])).toBe(true))


test('test for royal flush', () =>
    expect(isRoyalFlush(
        [{ CardValue: 'Queen', Suit: 'Clubs' },
        { CardValue: 'Ace', Suit: 'Clubs' },
        { CardValue: 'King', Suit: 'Clubs' },
        { CardValue: 'Jack', Suit: 'Clubs' },
        { CardValue: 'Ten', Suit: 'Clubs' }])).toBe(true))



