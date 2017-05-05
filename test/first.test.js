const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  // Jey's Tests
  it('returns string if asked for a single element', () => {
    expect(typeof _.first(['a', 'b', 'c'])).toEqual('string');
  });

  it('returns array if asked for multiple elements', () => {
    expect(Array.isArray(_.first(['a', 'b', 'c'],2))).toEqual(true);
  });

});