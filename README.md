# random-16-digit

A tiny, dependency-free package that creates cryptographically secure 16-digit random numbers using Node.js `crypto`.

## Requirements

Node.js 18 or newer.

## Installation

```sh
npm install random-16-digit
```

## Usage

```js
import generateRandom16Digit, { random16Digit } from 'random-16-digit';

const value = generateRandom16Digit();
// Example: "4938172465192736"

console.log(value); // string containing exactly 16 digits
console.log(random16Digit());
```

The named and default exports return a string, not a JavaScript number, so leading zeros are never lost.

## API

### `generateRandom16Digit()`

Returns a cryptographically secure 16-character string containing digits `0`–`9`. The first character is always `1`–`9`.

### `random16Digit()`

Alias for `generateRandom16Digit()`.

## Development

```sh
npm test
npm pack --dry-run
```

## License

MIT
