/* Imports */
import Grid from "./Grid.js";
import Tile from "./Tile.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput();

function setupInput() {
  window.addEventListener("keydown", handleInput, { once: true })
}

function handleInput(event) {
  switch (event.key) {
    case "ArrowUp":
      moveUp();
      break
    case "ArrowDown":
      moveDown();
      break
    case "ArrowLeft":
      moveLeft();
      break
    case "ArrowRight":
      moveRight();
      break
    default:
      setupInput();
      return
  }

  grid.cells.forEach(cell => cell.mergeTile())

  setupInput();
}


function moveUp() {
  return slideTiles(grid.cellsByColumn)
}

function moveDown() {
  return slideTiles(grid.cellsByColumn.map(column => [...column].reverse()))
}

function moveLeft() {
  return slideTiles(grid.cellsByRow)
}

function moveRight() {
  return slideTiles(grid.cellsByRow.map(row => [...row].reverse()))
}


function slideTiles(cells) {
  cells.forEach(group => {
    for (let i = 1; i < group.length; i++) {
      const cell = group[i];
      let lastValidCell
      if (cell.tile == null) continue
      for (let j = i - 1; j >= 0 ; j--) {
        const moveToCell = group[j];
        if (!moveToCell.canAccept(cell.tile)) break
        lastValidCell = moveToCell;
      }
      /* Check if we can move or merge a tile */
      if (lastValidCell != null) {
        if (lastValidCell.tile != null) {
          lastValidCell.mergeTile = cell.tile;
        } else {
          lastValidCell.tile = cell.tile;
        }
        cell.tile = null;
      }
    }
  })

}
