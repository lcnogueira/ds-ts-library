import { Stack } from '../../src';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should start empty', () => {
    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toEqual(true);
  });

  it('should push elements to the end', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toEqual(2);
    expect(stack.peek()).toEqual(2);
  });

  it('should pop elements from the end', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.size()).toEqual(2);
    expect(stack.peek()).toEqual(2);
  });

  it('should return undefined when trying to pop from an empty stack', () => {
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.pop()).toBeUndefined();
  });

  it('should peek at the top element in the stack without poping it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.size()).toBe(2);
  });

  it('should return undefined when trying to peek from an empty stack', () => {
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.peek()).toBeUndefined();
  });

  it('should return the correct size if size() is called', () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.size()).toEqual(1);
  });

  it('should clear the stack if clear() is called', () => {
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should return a comma separated string if toString() is called', () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.toString()).toEqual('1');
    stack.push(2);
    expect(stack.toString()).toEqual('1,2');

    const stackString = new Stack<string>();
    stackString.push('el1');
    expect(stackString.toString()).toEqual('el1');
    stackString.push('el2');
    expect(stackString.toString()).toEqual('el1,el2');
  });

  it('should return an empty string if toString() is called and the stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.toString()).toEqual('');
  });
});
