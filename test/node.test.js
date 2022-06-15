import { Node } from '../node.js';

describe('Node', function () {
  it('should return value null if the right OR the left side is null', function () {
    const testValue = Node('+', null, null, null);
    expect(null).toBe(testValue.value);
  });
});
