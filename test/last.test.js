const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

   // Jey's Tests
  it('returns string if asked for a single element', () => {
    expect(typeof _.first(['a', 'b', 'c'])).toEqual('string');
  });

  it('returns array if asked for multiple elements', () => {
    expect(Array.isArray(_.first(['a', 'b', 'c'],2))).toEqual(true);
  });
  
});