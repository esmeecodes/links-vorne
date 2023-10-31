class DirectionInput {
  constructor() {
    this.heldDirections = [];
    this.map = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
    };
  }

  init() {
    document.addEventListener("keydown", (e) => {
      console.log(e.code);
      const dir = this.map[e.code];
    });
  }
}
