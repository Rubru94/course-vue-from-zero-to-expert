import { describe, expect, it } from 'vitest';
import { sum, sumArray } from '../../src/helpers/sum.helper';

it('should return 3 if add 1 + 2', () => {
  // arrange
  const a = 1;
  const b = 2;

  // act
  const result = sum(a, b);

  // assert
  expect(result).toBe(a + b); // "toBe" for native types & "toBeEqual" for objects
});

describe('sumArray', () => {
  it('should return 0 if array is empty', () => {
    // arrange
    const numbers = [];

    // act
    const result = sumArray(numbers);

    // assert
    expect(result).toBe(0);
  });

  it('should return sum of array items', () => {
    // arrange
    const numbers = [1, 5, 2];

    // act
    const result = sumArray(numbers);

    // assert
    expect(result).toBe(numbers.reduce((acc, curr) => acc + curr, 0));
  });
});
