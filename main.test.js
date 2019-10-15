import { drawCard, toWords } from './main'
import {isFlush, isAStraight, findHighcard, isStraightFlush, isRoyalFlush, isFourKind } from './hands'


test('if all the same suit, is a flush', () =>
    expect(isFlush(
        [{ card: 'Queen', suit: 'Clubs' },
        { card: 'Five', suit: 'Clubs' },
        { card: 'Six', suit: 'Clubs' },
        { card: 'Six', suit: 'Clubs' },
        { card: 'Queen', suit: 'Clubs' }])).toBe(true))

test('test for a straight', () =>
    expect(isAStraight(
        [{ card: 'Queen', suit: 'Clubs' },
        { card: 'Nine', suit: 'Hearts' },
        { card: 'King', suit: 'Clubs' },
        { card: 'Jack', suit: 'Diamonds' },
        { card: 'Ten', suit: 'Clubs' }])).toBe(true))

test('test for Straight flush', () =>
    expect(isStraightFlush(
        [{ card: 'Queen', suit: 'Clubs' },
        { card: 'Nine', suit: 'Clubs' },
        { card: 'King', suit: 'Clubs' },
        { card: 'Jack', suit: 'Clubs' },
        { card: 'Ten', suit: 'Clubs' }])).toBe(true))



test('test to find high card', () =>
    expect(findHighcard(
        [{ card: 'Queen', suit: 'Clubs' },
        { card: 'Nine', suit: 'Clubs' },
        { card: 'King', suit: 'Clubs' },
        { card: 'Jack', suit: 'Clubs' },
        { card: 'Ten', suit: 'Clubs' }])).toBe('King'))

test('test for royal flush', () =>
    expect(isRoyalFlush(
        [{ card: 'Queen', suit: 'Clubs' },
        { card: 'Ace', suit: 'Clubs' },
        { card: 'King', suit: 'Clubs' },
        { card: 'Jack', suit: 'Clubs' },
        { card: 'Ten', suit: 'Clubs' }])).toBe(true))

test('test for four of a kind', () =>
    expect(isFourKind(
        [{ card: 'Nine', suit: 'Clubs' },
        { card: 'Ten', suit: 'Hearts' },
        { card: 'Ten', suit: 'Clubs' },
        { card: 'Ten', suit: 'Diamonds' },
        { card: 'Ten', suit: 'Clubs' }])).toBe(true))

