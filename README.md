# flow-local

[![npm version](https://img.shields.io/npm/v/flow-local.svg)](https://www.npmjs.com/package/flow-local)
[![Downloads/month](https://img.shields.io/npm/dm/flow-local.svg)](https://www.npmjs.com/package/flow-local)
[![Dependency Status](https://david-dm.org/pigoz/flow-local.svg)](https://david-dm.org/pigoz/flow-local)

The local [flow](https://github.com/flow/flow) executor.

## Installation

```
> npm install -g flow-local
```

**Note:**

- The `flow-bin` module must not be installed into global.
- This module must be installed into global.

## Usage

First, please install the `flow-bin` module in your devDependencies.

```
> yarn add flow-bin -D
```

Next, please do `flow`.

```
> flow
```

This command executes the global `flow-local`, which finds the project based
flow installed to `devDependencies`.
