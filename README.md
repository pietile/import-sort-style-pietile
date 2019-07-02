# import-sort-style-pietile

Simple and meaningful imports order style for [import-sort](https://github.com/renke/import-sort).
Works great with JavaScript and TypeScript.

## Usage

1. Install packages:

   - import-sort: `yarn add --dev import-sort`
   - parser either _JavaScript_ or \_TypeScript:
     `yarn add --dev import-sort-parser-babylon` or `yarn add --dev import-sort-parser-typescript`
   - this style: `yarn add --dev import-sort-style-pietile`

2. Setup config:

   ```json
   {
     ".js, .jsx": {
       "parser": "babylon",
       "style": "pietile"
     },
     ".ts, .tsx": {
       "parser": "typescript",
       "style": "pietile"
     }
   }
   ```

3. Sort imports either from [CLI](https://github.com/renke/import-sort/tree/master/packages/import-sort-cli) or with Editor plugin ([VSCode](https://github.com/amatiasq/vsc-sort-imports) for example)

## Result

```js
// Modules without members. Don't sort them as the order can be important.
import 'babel-polyfill';

// React module is special due to JSX requirement
import React from 'react';

// Modules from Node.js library
import { readFile, writeFile } from 'fs';
import * as path from 'path';

// Installed modules
import moment from 'moment';

// Project modules external to the current file
import Controller from '../../lib/Controller';
import RedButton from '../Buttons/RedButton';

// Project modules internal to the current file
import AwesomeComponent from './AwesomeComponent';

// Resources
import icon from './icon.png';
```

## Why is this name?

https://mrsharpoblunto.github.io/foswig.js/
