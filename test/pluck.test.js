const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  //Jey's test
  it('returns an array of just games, given an object of game objects', () => {
    const people = {
    	action: { games: 'Bioshock' },
    	mystery: { games: 'Myst'},
    	adventure: { games: 'Monkey Island'}
    };
    const result = _.pluck(people, 'games');
    expect(result).toEqual(['Bioshock', 'Myst', 'Monkey Island']);
  });

});