export default class Tile {
  #tileElement
  #x
  #y

  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement = document.addEventListener("tile");
    tileContainer.append(this.#tileElement)
    this.value = value
  }

  set x(value) {
    this.#x = value
    this.#tileElement.style.setProperty("--x", value)
  }

  set y(value) {
    this.#y = value
    this.#tileElement.style.setProperty("--y", value)

  }
}
