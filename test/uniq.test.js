const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  //Jey's tests
  it('de-dups a list of playing Cards', () => {
    const cards = ['Ace C', 'Ace C', '1 C', '2 C', '3 C', '3 C', '...', '...'];
    expect(_.uniq(cards)).toEqual(['Ace C', '1 C', '2 C', '3 C', '...']);
  });

  it('de-dups a list of Richard\'s Scary Busy Town Characters', () => {
    const characters = {
    	a: 'Mr. Fix-It',
    	b: 'Lowly Worm',
    	c: 'Jamie Lannister',
    	d: 'Jamie Lannister',
    	e: 'Huckle Cat',
    	f: 'Huckle Cat',
    	g: 'Bananas Gorrila',
    };
    expect(_.uniq(characters)).toEqual(['Mr. Fix-It', 'Lowly Worm', 'Jamie Lannister', 'Huckle Cat', 'Bananas Gorrila']);
  });

});