class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 0; // hoeveel pixels we nog moeten bewegen tot we in een nieuwe grid zijn

    this.isPlayerControlled = config.isPlayerControlled || false; // we gaan de persoon niet besturen, maar we gaan hem wel laten bewegen

    this.directionUpdate = {
      up: ["y", -0.5],
      down: ["y", 0.5],
      left: ["x", -0.5],
      right: ["x", 0.5], // [propert,change]
    };
  }

  update(state) {
    if (this.movingProgressRemaining > 0) {
      // we checken of de persoon niet aan het bewegen is
      this.updatePosition();
    } else {
      // more cases  for starrting to walk welcome here
      // case: we're keyboard ready and we have an arrow pressed.
      if (this.isPlayerControlled && state.arrow) {
        this.startBehavior(state, {
          type: "walk",
          direction: state.arrow,
        });
      }
    }
    // we geven de direction mee aan de startBehavior
    // we checken of de persoon bestuurd wordt en of er een arrow/direction is meegegeven
  }

  startBehavior(state, behavior) {
    // setting character direction to whatever behaviour has been passed in
    this.direction = behavior.direction;
    if (behavior.type === "walk") {
      // stop here if the space is not free
      if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
        return; // stop walking, stop de functie
      }
      // free to walk!
      state.map.moveWall(this.x, this.y, this.direction); // hiermee setten we onze future position vast en zetten er een wall op, zodat andere objecten niet op die plek kunnen komen
      this.movingProgressRemaining = 16;
    }
  }

  updatePosition() {
    const [property, change] = this.directionUpdate[this.direction];
    this[property] += change;
    this.movingProgressRemaining -= 1;
  }
}

// we gaan de property updaten, we gaan de x of y updaten, we gaan de x of y updaten met de change die we hebben gedefinieerd in de directionUpdate
// hiermee bewegen we de persoon en stoppen we zijn movement als hij in de nieuwe grid is
