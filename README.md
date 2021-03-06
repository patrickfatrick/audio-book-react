# Alice's Adventures in Wonderland Guided Reading

Hosted version can be found at https://patrickfatrick.github.io/wonderland/

## Usage

```bash
$ git clone git@github.com:patrickfatrick/wonderland.git
$ npm i
$ npm start
$ npm run debug # to turn on a logging middleware for state changes
```

Navigate to localhost:8080.

[Yarn](https://yarnpkg.com) is a new package manager that is faster than npm, and more secure since it uses a lock file, but you can also `npm install` just as usual.

## What is it?

This is a demonstration of a guided reading experience using React and Redux. The book (in this case _Alice's Adventure's in Wonderland_) is actually just a JSON interpretation of the book, which the client then builds the book UI out of. Theoretically, with the same JSON schema any book could be dropped in. (The JSON file for the demo is located at [data/data.json](https://github.com/patrickfatrick/wonderland/blob/master/data/26tniea82c/data.json))

The demo includes the following features:

- An audio reading of the book provided by LibriVox [here](https://librivox.org/alices-adventures-in-wonderland-dramatic-reading-by-lewis-carroll/)
- Fully responsive for small screens.
- When audio is turned on, lines are highlighted to follow along with the reading.
- Auto-scroll can be turned on when the reading is enabled.
- You can select any line of the book to jump to it in the reading.
- Since the book is just one long sheet instead of multiple pages, the navbar at the top displays the current chapter (at some point I will likely put in a jump-to-chapter feature there)
- Chapters are rendered dynamically: scroll down to the end of chapter 1 and chapter 2 will be rendered, etc.
- Jump to any chapter, even if hasn't been rendered yet.

## Architecture

State is handled in a typical Redux fashion with actions, action creators, and reducers. The state tree is fully immutable (no immutable.js here, just returning clones of the state tree throughout). Also uses the concept of smart and dumb components espoused by Redux. The wrappers folder contains the smart components that have access to the state and actions, the components folder contains the "dumb" components that are bound to the smart components using `connect`.

Uses webpack to compile/transpile javascript and JSX assets, with hot-reloading in dev. JS and JSX code is linted using the [Airbnb style guide](https://github.com/airbnb/javascript).

Uses the [fetch API](https://github.com/github/fetch) (polyfilled) to retrieve data from the server.

Styles are created using css modules, postcss, css-next.
