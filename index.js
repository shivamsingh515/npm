import { randomInt } from 'node:crypto';

/**
 * Generate a cryptographically secure 16-digit number.
 *
 * The result is always returned as a string so that it is exactly 16 digits,
 * including when its first digit must be non-zero.
 *
 * @returns {string} A 16-digit random number.
 */
export function generateRandom16Digit() {
  let result = String(randomInt(1, 10));

  for (let index = 1; index < 16; index += 1) {
    result += String(randomInt(0, 10));
  }

  return result;
}

/** Alias for generateRandom16Digit for convenient imports. */
export const random16Digit = generateRandom16Digit;

export default generateRandom16Digit;
