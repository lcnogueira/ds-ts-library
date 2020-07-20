import { Stack } from '..';

/**
 * Convert a decimal number to binary
 * @param decNumber decimal number
 */
export function decimalToBinary(decNumber: number): string {
  const remStack = new Stack();
  let rem: number;
  let binaryString = '';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

/**
 * Convert a decimal number to any provided base (up to 36)
 * @param decNumber decimal number
 * @param base base to convert to (up to 36)
 */
export function baseConverter(decNumber: number, base: number): string {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rem: number;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
