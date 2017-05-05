const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  //Jey's Test
  it('reduces an object with key value pairs of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const numsObj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5
    };
    const result = _.reduce(numsObj, (acc, num) => acc + num);
    expect(result).toEqual(15);
  });

  it('reduces an object with key value pairs of numbers to a sum, *with* a non-zero explicit initial value for the accumulator', () => {
    const numsObj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5
    };
    const result = _.reduce(numsObj, (acc, num) => acc + num, 5);
    expect(result).toEqual(20);
  });
});