class MainGameMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y
    );
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y
    );
  }
  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  mountObjects() {
    Object.values(this.gameObjects).forEach((gameObject) => {
      // NOTE determine if the object should actually mount.
      gameObject.mount(this);
    });
  }
  // when a game object enters the scene, we want to fire off the code addWall
  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }

  removeWall(x, y) {
    delete this.walls[`${x},${y}`];
  }
  // if another game object moves, we want to fire this moveWall function
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY, direction); // remove a wall from the old position
    const { x, y } = utils.nextPosition(wasX, wasY, direction); // calculate the new position, offset by the direction
    this.addWall(x, y); // added a wall to the new position
  }
}

window.MainGameMap = {
  DemoRoom: {
    lowerSrc:
      "/Project_1/01-pizza-legends-intro/images/maps/map-outdoortest.png",
    upperSrc:
      "/Project_1/01-pizza-legends-intro/images/maps/map-outdoortest.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(5),
      }), // creeert een nieuw game-object in deze map met de naam hero
      secondPerson: new Person({
        x: utils.withGrid(2),
        y: utils.withGrid(4),
        src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc1.png",
      }), //
    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(7, 7)]: true,
      [utils.asGridCoord(8, 7)]: true, // met de brackets maak je zo een dynamic key in javascript, deze geeft een string terug en evalueert deze dan als true of false. In dit geval is het true.
      // dit is de omgevormde string van 8 en 7 keer 16
    },
  },
  // Kitchen: {
  //   lowerSrc: "/Project_1/01-pizza-legends-intro/images/maps/KitchenLower.png",
  //   upperSrc: "/Project_1/01-pizza-legends-intro/images/maps/KitchenUpper.png",
  //   gameObjects: {
  //     thirdPerson: new Person({
  //       x: utils.withGrid(5),
  //       y: utils.withGrid(5),
  //       src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc2.png",
  //     }), // creeert een nieuw game-object in deze map met de naam hero
  //     fourthPerson: new Person({
  //       x: utils.withGrid(2),
  //       y: utils.withGrid(7),
  //       src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc3.png",
  //     }), //
  //   },
  // },
};
