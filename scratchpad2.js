const onePair = [ { CardValue: 'Jack', Suit: 'Spades' }, 
  { CardValue: 'Ace', Suit: 'Clubs' }, 
  { CardValue: 'Seven', Suit: 'Hearts' }, 
  { CardValue: 'King', Suit: 'Spades' }, 
  { CardValue: 'Seven', Suit: 'Spades' } ] 

  const twoPair = [ { CardValue: 'Queen', Suit: 'Spades' }, 
  { CardValue: 'Five', Suit: 'Clubs' }, 
  { CardValue: 'Six', Suit: 'Spades' }, 
  { CardValue: 'Six', Suit: 'Clubs' }, 
  { CardValue: 'Queen', Suit: 'Clubs' } ] 
  const flush = [ { CardValue: 'Queen', Suit: 'Clubs' }, 
  { CardValue: 'Five', Suit: 'Clubs' }, 
  { CardValue: 'Six', Suit: 'Clubs' }, 
  { CardValue: 'Six', Suit: 'Clubs' }, 
  { CardValue: 'Queen', Suit: 'Clubs' } ] 

  isFlush = (f) => f.every(x => x.Suit == f[0].Suit)

  console.log(isFlush(flush));
  
  