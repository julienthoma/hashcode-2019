const { exampleFunction } = require('./helper');

describe('exampleFunction', () => {
  it('should do something right', () => {
    expect(exampleFunction(2, 2)).toEqual(4);
  });
});
