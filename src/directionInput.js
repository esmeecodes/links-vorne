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

  get Direction() {
    // we maken een getter, die gaat de eerste direction uit de array halen
    return this.heldDirections[0];
  }

  init() {
    document.addEventListener("keydown", (e) => {
      console.log(e.code);
      const dir = this.map[e.code]; // we halen de direction op uit de map en steken die in de dir-array
      if (dir && this.heldDirections.indexOf(dir) === -1) {
        // we checken of de direction in de array zit, als hij er niet in zit, dan voegen we hem toe
        this.heldDirections.unshift(dir); // we voegen de direction toe aan de array
      }
    });
    document.addEventListener("keyup", (e) => {
      const dir = this.map[e.code];
      const index = this.heldDirections.indexOf(dir); // we checken of de direction in de array zit, als hij er in zit, dan verwijderen we hem
      if (index > -1) {
        this.heldDirections.splice(index, 1); // we verwijderen de direction uit de array
      }
    });
  }
}
