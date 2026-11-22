import test from 'node:test';
import assert from 'node:assert/strict';
import generateRandom16Digit, {
  generateRandom16Digit as namedExport,
  random16Digit,
} from './index.js';

const DIGITS_ONLY = /^\d{16}$/;

test('returns a 16-digit string', () => {
  const value = generateRandom16Digit();
  assert.equal(typeof value, 'string');
  assert.match(value, DIGITS_ONLY);
});

test('the first digit is never zero', () => {
  for (let index = 0; index < 100; index += 1) {
    assert.match(generateRandom16Digit(), /^[1-9]\d{15}$/);
  }
});

test('named exports use the same generator', () => {
  assert.match(namedExport(), DIGITS_ONLY);
  assert.match(random16Digit(), DIGITS_ONLY);
});

test('generated values vary', () => {
  const values = new Set();
  for (let index = 0; index < 100; index += 1) {
    values.add(generateRandom16Digit());
  }
  assert.ok(values.size > 1);
});
