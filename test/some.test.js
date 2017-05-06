const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  //Jey's tests
  it('returns true if at least one number in an object are odd', () => {
      const nums = {
        a: 2,
        b: 4,
        c: 6,
        d: 7
      };
      expect(_.some(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if no numbers in an object are odd', () => {
      const nums = {
        a: 2,
        b: 4,
        c: 6,
        d: 8
      };
      expect(_.some(nums, num => num % 2 === 1)).toBe(false);
    });
});