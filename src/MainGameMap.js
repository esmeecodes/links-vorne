class MainGameMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
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
}

window.MainGameMap = {
  DemoRoom: {
    lowerSrc: "/Project_1/01-pizza-legends-intro/images/maps/DemoLower.png",
    upperSrc: "/Project_1/01-pizza-legends-intro/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(5),
      }), // creeert een nieuw game-object in deze map met de naam hero
      secondPerson: new Person({
        x: utils.withGrid(2),
        y: utils.withGrid(4),
      }),
      hero: new GameObject({
        x: 7,
        y: 6,
      }), // creeert een nieuw game-object in deze map met de naam hero
      secondPerson: new GameObject({
        x: 9,
        y: 6,
        src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc1.png",
      }), //
    },
  },
  Kitchen: {
    lowerSrc: "/Project_1/01-pizza-legends-intro/images/maps/KitchenLower.png",
    upperSrc: "/Project_1/01-pizza-legends-intro/images/maps/KitchenUpper.png",
    gameObjects: {
      thirdPerson: new Person({
        x: utils.withGrid(5),
        y: utils.withGrid(5),
        src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc2.png",
      }), // creeert een nieuw game-object in deze map met de naam hero
      fourthPerson: new Person({
        x: utils.withGrid(2),
        y: utils.withGrid(7),
      }),

      thirdPerson: new GameObject({
        x: 1,
        y: 5,
        src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc2.png",
      }), // creeert een nieuw game-object in deze map met de naam hero
      fourthPerson: new GameObject({
        x: 5,
        y: 5,
        src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc3.png",
      }), //
    },
  },
};
