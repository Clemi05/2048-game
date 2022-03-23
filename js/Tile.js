export default class Tile {
  #tileElement
  #x
  #y
  #value

  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile")
    tileContainer.append(this.#tileElement)
    this.value = value;
  }

  get value() {
    return this.#value
  }

  set value(v) {
    /* will change the value for the color style of the tile */
    this.#value = v;
    this.#tileElement.textContent = v;
    const power = Math.log2(v);
    const backgroundLightness = 100 - power * 9;
    this.#tileElement.style.setProperty(
      "--background-lightness",
      `${backgroundLightness}%`
    )
    this.#tileElement.style.setProperty(
      "--text-lightness",
      `${backgroundLightness <= 50 ? 90 : 10}%`
    )
  }

  set x(value) {
    /* Will set the value of the x in the CSS */
    this.#x = value;
    this.#tileElement.style.setProperty("--x", value)
  }

  set y(value) {
    /* Will set the value of the y in the CSS */
    this.#y = value;
    this.#tileElement.style.setProperty("--y", value)
  }

  remove() {
    this.#tileElement.remove()
  }

}
