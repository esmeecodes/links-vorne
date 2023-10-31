class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 32; // hoeveel pixels we nog moeten bewegen tot we in een nieuwe grid zijn
    this.direction = "down";

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1], // [propert,change]
    };
  }

  update(state) {
    this.updatePosition();
  }

  updatePosition() {
    if (this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    } // we gaan de property updaten, we gaan de x of y updaten, we gaan de x of y updaten met de change die we hebben gedefinieerd in de directionUpdate
    // hiermee bewegen we de persoon en stoppen we zijn movement als hij in de nieuwe grid is
  }
}
