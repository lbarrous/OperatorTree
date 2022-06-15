import { tree } from '../index';

describe('Tree', function () {
  it('should return correct string value', function () {
    expect(tree.toString()).toBe('((7 + ((3 - 2) x 5)) ÷ 6)');
  });

  it('should return correct calculated result', function () {
    expect(tree.result()).toBe(2);
  });
});
