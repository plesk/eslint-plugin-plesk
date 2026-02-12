# Plesk ESLint Plugin

Custom ESLint rules for Plesk projects

[![NPM version](https://img.shields.io/npm/v/@plesk/eslint-plugin-plesk.svg)](https://www.npmjs.org/package/@plesk/eslint-plugin-plesk)
[![NPM Downloads](https://img.shields.io/npm/dm/@plesk/eslint-plugin-plesk.svg)](https://www.npmjs.org/package/@plesk/eslint-plugin-plesk)


## Installation

```
npm install --save-dev @plesk/eslint-plugin-plesk
```


## Usage

Put into your `eslint.config.mjs`:
```js

import pleskPlugin from "@plesk/eslint-plugin-plesk";

export default [
    {
        plugins: {
            '@plesk/plesk': pleskPlugin,
        },
    },
]
```
