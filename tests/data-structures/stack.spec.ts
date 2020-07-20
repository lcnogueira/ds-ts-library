import { Stack } from '../../src';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('starts empty', () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('pushes elements to the end', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('pops elements from the end', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('returns undefined when trying to pop from an empty stack', () => {
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.pop()).toBeUndefined();
  });

  it('peeks at the top element in the stack without poping it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
  });

  it('returns undefined when trying to peek from an empty stack', () => {
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.peek()).toBeUndefined();
  });

  it('returns the correct size if size() is called', () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  it('clears the stack if clear() is called', () => {
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('returns a comma separated string if toString() is called', () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.toString()).toBe('1');
    stack.push(2);
    expect(stack.toString()).toBe('1,2');

    const stackString = new Stack<string>();
    stackString.push('el1');
    expect(stackString.toString()).toBe('el1');
    stackString.push('el2');
    expect(stackString.toString()).toBe('el1,el2');
  });

  it('returns an empty string if toString() is called and the stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.toString()).toBe('');
  });
});
