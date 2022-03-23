# 2048 Game

Simple 2048 game in JavaScript.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Click here to see live site](https://clemi05.github.io/2048-game/)
- Repository URL: [Click here to see repository](https://github.com/Clemi05/2048-game)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript

### What I learned

In this project, I leaned about the Modules in Javascript:

```js
import Grid from "./Grid.js";

export default class Tile { ... }
```

I learned about several functions:

- CSSStyleDeclaration.setProperty()

```js
set y(value) {
  this.#y = value;
  this.#tileElement.style.setProperty("--y", value);
}
```

- Array.prototype.reduce()

```js
get cellsByRow() {
    return this.#cells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || [];
      cellGrid[cell.y][cell.x] = cell;
      return cellGrid
    }, [])
  }
```

- Array.prototype.flatMap()

```js
function slideTiles(cells) {
  return Promise.all(
    cells.flatMap(group => {
      const promises = [];
      for (let i = 1; i < group.length; i++) {
        const cell = group[i];
        let lastValidCell
        if (cell.tile == null) continue
        for (let j = i - 1; j >= 0 ; j--) {
          const moveToCell = group[j];
          if (!moveToCell.canAccept(cell.tile)) break
          lastValidCell = moveToCell;
        }
      /* See more in script.js line 85*/
    })
  )
}
```
I have also learned about the private class features, and it was as well a good reminder of the getter and setter:

```js
  #cellElement
  #x
  #y
  #tile
  #mergeTile
```
I have as well learned about the await operator, combine with the async function and the promise object:

```js
async function handleInput(event) {
  switch (event.key) {
    case "ArrowUp":
      if (!canMoveUp()) {
        setupInput()
        return
      }
      await moveUp();
      break
    /* See more in the scrit line 16 */
```

```js
  waitForTransition(animation = false) {
    return new Promise(resolve => {
      this.#tileElement.addEventListener(
        animation ? "animationend" : "transitionend",
        resolve,
        { once: true }
      )
    })
  }
```

### Continued development

Following this project, I will continue working on small JavaScript projects to exercise my self and improve my JavaScript and CSS skills. I am also going to learn more about React.

### Useful resources

- [If You Want To Be An Advanced Game Developer Build This Project](https://www.youtube.com/watch?v=wOVEe9eawXc)
- [JavaScript ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
- [MDN Web Docs - Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [MDN Web Docs - Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN Web Docs - await Operator ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [MDN Web Docs - reduce() Method ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)


## Author

- Github - [Clemi05](https://github.com/Clemi05)
- LinkedIn - [Clément Azalbert](https://www.linkedin.com/in/clement-azalbert/)
