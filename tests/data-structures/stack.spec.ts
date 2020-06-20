import { Stack } from '../../src';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('starts empty', () => {
    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toEqual(true);
  });
});
