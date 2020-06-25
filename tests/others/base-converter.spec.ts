import { decimalToBinary, baseConverter } from '../../src';

describe('Base Converter', () => {
  it('returns 1 if decimalToBinary(1)', () => {
    expect(decimalToBinary(1)).toBe('1');
  });

  it('returns 11101001 if decimalToBinary(233)', () => {
    expect(decimalToBinary(233)).toBe('11101001');
  });

  it('returns 1010 if baseConverter(10, 2)', () => {
    expect(baseConverter(10, 2)).toBe('1010');
  });

  it('returns 565360 if baseConverter(100345, 7)', () => {
    expect(baseConverter(100345, 7)).toBe('565360');
  });

  it('returns an empty string if provided base is not between 2 and 36', () => {
    expect(baseConverter(100, 1)).toBe('');
    expect(baseConverter(100, 37)).toBe('');
  });
});
