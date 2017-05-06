const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  // Jey's Test
  it('rejects sub-arrays from an array', () => {
    const colors = [['blue', 'light blue', 'sky blue'], 'red', 'orange', 'yellow', ['green', 'forest green', 'blue green'], 'purple'];
    expect(_.reject(colors, color => Array.isArray(color)===true)).toEqual(['red', 'orange', 'yellow', 'purple']);
  });

});