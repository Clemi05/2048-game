export default class Tile {
  #tileElement
  #x
  #y
  #value

  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div")
    this.#tileElement.classList.add("tile")
    tileContainer.append(this.#tileElement)
    this.value = value
  }

  set value(v) {
    this.#value = v
    this.#tileElement.textContent = v
  }

  set x(value) {
    /* Will set the value of the x of the tile in the CSS */
    this.#x = value
    this.#tileElement.style.setProperty("--x", value)
  }

  set y(value) {
    /* Will set the value of the y of the tile in the CSS */
    this.#y = value
    this.#tileElement.style.setProperty("--y", value)

  }
}
