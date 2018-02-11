# import-sort-style-pietile

Simple and meaningful imports order

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
