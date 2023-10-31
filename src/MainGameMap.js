class MainGameMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}
window.MainGameMap = {
  DemoRoom: {
    lowerSrc: "/Project_1/01-pizza-legends-intro/images/maps/DemoLower.png",
    upperSrc: "/Project_1/01-pizza-legends-intro/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        x: utils.withGrid(5),
        y: utils.withGrid(5),
      }), // creeert een nieuw game-object in deze map met de naam hero
      secondPerson: new Person({
        x: utils.withGrid(2),
        y: utils.withGrid(4),
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
        src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc3.png",
      }), //
    },
  },
};
