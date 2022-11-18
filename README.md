# AFEX REACT PROJECTS FOLDER STRUCTURE

### Table of Contents

- [Overview](#overview)
  - [Folder structure](#folder-structure)
  - [Styling](#styling)
  - [Imports](#imports)
- [Code Styling](#code-style)
- [Tests](#tests)
  - [Integration Tests](#integration-tests)
  - [Unit Tests](#unit-tests)
  - [Widget Tests](#widget-tests)
  - [Coverage](#test-coverage)

### Overview

#### Folder structure

- `assets`
- `components`
- `contexts`
- `data`
- `pages`
- `utils`

#### Styling

The recommended styling is [Tailwind Css](https://tailwindcss.com)

#### Imports

The order of imports is very important. Enusre to add a space between import groups

Group 1

1.  React imports `import React, { useState } from 'react'`
2.  Package imports `import { FaStar } from 'react-icons/fa '`

Group 2

3.  Page component imports `import { Hero } from './components/hero'`

Group 3

4.  Contexts imports `import { useAuthCtx } from '../contexts `
5.  Utils imports `import { axios } from '../utils `
6.  Data imports `import { dummyData } from "../data `

Group 4

7.  Style imports `import './style.css' `

### Code Style

For asynchronous code execution, use async-await. Ensure your code is non-blocking.

Do

```
  const fetchRemoteResource = async () => {
    const resp = await axios.get("https://remote-url.com");

    if(!resp.data || resp.status !== 200) return; // You can catch the error
    and update accordingly or exit the function.

    const { data } = resp.data;

    return data;
  }
```

Don't

```
  axios.get("https://remote-url.com")
    .then(resp => resp.data)
    .catch(err => console.log(err));
```

### Tests

We carry out the following type of tests

- Integration tests
- Unit tests
- Snapshot Tests

#### Integration Tests

#### Unit Tests

#### Snapshot Tests

#### Test Coverage
