export default class Stack<T = number> {
  private count: number;
  private items: {
    [key: number]: T;
  };

  constructor() {
    this.count = 0;
    this.items = {};
  }

  /**
   * Adds and element to the top of the stack
   * @param element
   */
  push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  /**
   * Removes the element that is in the top of the stack and returns it's value
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  /**
   * Returns the element that is in the top of the stack and return it's value
   * If you wanna remove it instead, see
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  /**
   * Returns true if the stack is empty and false otherwise
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * Returns the stack size
   */
  size() {
    return this.count;
  }

  /**
   * Resets the stack to it's initial state
   */
  clear() {
    /* while (!this.isEmpty()) {
      this.pop();
    } */

    this.items = {};
    this.count = 0;
  }

  /**
   * Returns the stack values as a comma separated string
   */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
