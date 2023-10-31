class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 0; // hoeveel pixels we nog moeten bewegen tot we in een nieuwe grid zijn

    this.isPlayerControlled = config.isPlayerControlled || false; // we gaan de persoon niet besturen, maar we gaan hem wel laten bewegen

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1], // [propert,change]
    };
  }

  update(state) {
    this.updatePosition();

    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      state.arrow
    ) {
      // we checken of de persoon niet aan het bewegen is en of er een direction is meegegeven
      this.direction = state.arrow; // we updaten de direction van de persoon
      this.movingProgressRemaining = 16; // we zetten de movingProgressRemaining op 16, zodat de persoon 16 pixels beweegt
    }
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
