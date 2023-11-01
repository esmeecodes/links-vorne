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

const data = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
  [1, 10],
  [1, 11],
  [1, 12],
  [1, 13],
  [1, 14],
  [1, 15],
  [1, 16],
  [1, 17],
  [1, 18],
  [1, 19],
  [1, 20],
  [1, 21],
  [1, 22],
  [1, 23],
  [1, 24],
  [1, 25],
  [1, 26],
  [1, 27],
  [1, 28],
  [1, 29],
  [1, 30],
  [1, 31],
  [1, 32],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8],
  [2, 9],
  [2, 10],
  [2, 11],
  [2, 12],
  [2, 13],
  [2, 14],
  [2, 15],
  [2, 16],
  [2, 17],
  [2, 18],
  [2, 19],
  [2, 20],
  [2, 21],
  [2, 22],
  [2, 23],
  [2, 24],
  [2, 25],
  [2, 26],
  [2, 27],
  [2, 28],
  [2, 29],
  [2, 30],
  [2, 31],
  [2, 32],
  [3, 1],
  [3, 2],
  [3, 23],
  [3, 24],
  [3, 31],
  [3, 32],
  [4, 1],
  [4, 2],
  [4, 23],
  [4, 24],
  [4, 31],
  [4, 32],
  [5, 1],
  [5, 2],
  [5, 5],
  [5, 6],
  [5, 7],
  [5, 8],
  [5, 9],
  [5, 10],
  [5, 13],
  [5, 14],
  [5, 15],
  [5, 16],
  [5, 17],
  [5, 18],
  [5, 19],
  [5, 20],
  [5, 21],
  [5, 22],
  [5, 23],
  [5, 24],
  [5, 25],
  [5, 26],
  [5, 27],
  [5, 28],
  [5, 31],
  [5, 32],
  [6, 1],
  [6, 2],
  [6, 5],
  [6, 6],
  [6, 7],
  [6, 8],
  [6, 9],
  [6, 10],
  [6, 13],
  [6, 14],
  [6, 15],
  [6, 16],
  [6, 17],
  [6, 18],
  [6, 19],
  [6, 20],
  [6, 21],
  [6, 22],
  [6, 23],
  [6, 24],
  [6, 25],
  [6, 26],
  [6, 27],
  [6, 28],
  [6, 31],
  [6, 32],
  [7, 1],
  [7, 2],
  [7, 5],
  [7, 6],
  [7, 13],
  [7, 14],
  [7, 27],
  [7, 28],
  [7, 31],
  [7, 32],
  [8, 1],
  [8, 2],
  [8, 5],
  [8, 6],
  [8, 13],
  [8, 14],
  [8, 27],
  [8, 28],
  [8, 31],
  [8, 32],
  [9, 1],
  [9, 2],
  [9, 5],
  [9, 6],
  [9, 9],
  [9, 10],
  [9, 11],
  [9, 12],
  [9, 13],
  [9, 14],
  [9, 15],
  [9, 16],
  [9, 17],
  [9, 18],
  [9, 19],
  [9, 20],
  [9, 23],
  [9, 24],
  [9, 27],
  [9, 28],
  [9, 31],
  [9, 32],
  [10, 1],
  [10, 2],
  [10, 5],
  [10, 6],
  [10, 9],
  [10, 10],
  [10, 11],
  [10, 12],
  [10, 13],
  [10, 14],
  [10, 15],
  [10, 16],
  [10, 17],
  [10, 18],
  [10, 19],
  [10, 20],
  [10, 23],
  [10, 24],
  [10, 27],
  [10, 28],
  [10, 31],
  [10, 32],
  [11, 1],
  [11, 2],
  [11, 5],
  [11, 6],
  [11, 9],
  [11, 10],
  [11, 23],
  [11, 24],
  [11, 27],
  [11, 28],
  [11, 31],
  [11, 32],
  [12, 1],
  [12, 2],
  [12, 5],
  [12, 6],
  [12, 9],
  [12, 10],
  [12, 23],
  [12, 24],
  [12, 27],
  [12, 28],
  [12, 31],
  [12, 32],
  [13, 1],
  [13, 2],
  [13, 5],
  [13, 6],
  [13, 9],
  [13, 10],
  [13, 13],
  [13, 14],
  [13, 17],
  [13, 18],
  [13, 19],
  [13, 20],
  [13, 23],
  [13, 24],
  [13, 27],
  [13, 28],
  [13, 31],
  [13, 32],
  [14, 1],
  [14, 2],
  [14, 5],
  [14, 6],
  [14, 9],
  [14, 10],
  [14, 13],
  [14, 14],
  [14, 17],
  [14, 18],
  [14, 19],
  [14, 20],
  [14, 23],
  [14, 24],
  [14, 27],
  [14, 28],
  [14, 31],
  [14, 32],
  [15, 1],
  [15, 2],
  [15, 5],
  [15, 6],
  [15, 9],
  [15, 10],
  [15, 13],
  [15, 14],
  [15, 19],
  [15, 20],
  [15, 23],
  [15, 24],
  [15, 27],
  [15, 28],
  [15, 31],
  [15, 32],
  [16, 1],
  [16, 2],
  [16, 5],
  [16, 6],
  [16, 9],
  [16, 10],
  [16, 13],
  [16, 14],
  [16, 19],
  [16, 20],
  [16, 23],
  [16, 24],
  [16, 27],
  [16, 28],
  [16, 31],
  [16, 32],
  [17, 1],
  [17, 2],
  [17, 5],
  [17, 6],
  [17, 9],
  [17, 10],
  [17, 13],
  [17, 14],
  [17, 19],
  [17, 20],
  [17, 23],
  [17, 24],
  [17, 27],
  [17, 28],
  [17, 31],
  [17, 32],
  [18, 1],
  [18, 2],
  [18, 5],
  [18, 6],
  [18, 9],
  [18, 10],
  [18, 13],
  [18, 14],
  [18, 19],
  [18, 20],
  [18, 23],
  [18, 24],
  [18, 27],
  [18, 28],
  [18, 31],
  [18, 32],
  [18, 1],
  [19, 2],
  [19, 5],
  [19, 6],
  [19, 9],
  [19, 10],
  [19, 13],
  [19, 14],
  [19, 15],
  [19, 16],
  [19, 17],
  [19, 18],
  [19, 19],
  [19, 20],
  [19, 23],
  [19, 24],
  [19, 27],
  [19, 28],
  [19, 31],
  [19, 32],
  [19, 1],
  [20, 2],
  [20, 5],
  [20, 6],
  [20, 9],
  [20, 10],
  [20, 13],
  [20, 14],
  [20, 15],
  [20, 16],
  [20, 17],
  [20, 18],
  [20, 19],
  [20, 20],
  [20, 23],
  [20, 24],
  [20, 27],
  [20, 28],
  [20, 31],
  [20, 32],
  [20, 1],
  [21, 2],
  [21, 5],
  [21, 6],
  [21, 9],
  [21, 10],
  [21, 23],
  [21, 24],
  [21, 31],
  [21, 32],
  [21, 1],
  [22, 2],
  [22, 5],
  [22, 6],
  [22, 9],
  [22, 10],
  [22, 23],
  [22, 24],
  [22, 31],
  [22, 32],
  [22, 1],
  [23, 2],
  [23, 5],
  [23, 6],
  [23, 9],
  [23, 10],
  [23, 13],
  [23, 14],
  [23, 15],
  [23, 16],
  [23, 17],
  [23, 18],
  [23, 19],
  [23, 20],
  [23, 21],
  [23, 22],
  [23, 23],
  [23, 24],
  [23, 27],
  [23, 28],
  [23, 31],
  [23, 32],
  [23, 1],
  [24, 2],
  [24, 5],
  [24, 6],
  [24, 9],
  [24, 10],
  [24, 13],
  [24, 14],
  [24, 15],
  [24, 16],
  [24, 17],
  [24, 18],
  [24, 19],
  [24, 20],
  [24, 21],
  [24, 22],
  [24, 23],
  [24, 24],
  [24, 27],
  [24, 28],
  [24, 31],
  [24, 32],
  [24, 1],
  [25, 2],
  [25, 5],
  [25, 6],
  [25, 21],
  [25, 22],
  [25, 27],
  [25, 28],
  [25, 31],
  [25, 32],
  [26, 5],
  [26, 6],
  [26, 21],
  [26, 22],
  [26, 27],
  [26, 28],
  [26, 31],
  [26, 32],
  [27, 5],
  [27, 6],
  [27, 7],
  [27, 8],
  [27, 9],
  [27, 10],
  [27, 11],
  [27, 12],
  [27, 13],
  [27, 14],
  [27, 15],
  [27, 16],
  [27, 17],
  [27, 18],
  [27, 19],
  [27, 20],
  [27, 21],
  [27, 22],
  [27, 23],
  [27, 24],
  [27, 25],
  [27, 26],
  [27, 27],
  [27, 28],
  [27, 31],
  [27, 32],
  [27, 1],
  [27, 2],
  [28, 5],
  [28, 6],
  [28, 7],
  [28, 8],
  [28, 9],
  [28, 10],
  [28, 11],
  [28, 12],
  [28, 13],
  [28, 14],
  [28, 15],
  [28, 16],
  [28, 17],
  [28, 18],
  [28, 19],
  [28, 20],
  [28, 21],
  [28, 22],
  [28, 23],
  [28, 24],
  [28, 25],
  [28, 26],
  [28, 27],
  [28, 28],
  [28, 31],
  [28, 32],
  [28, 1],
  [28, 2],
  [29, 31],
  [29, 32],
  [29, 1],
  [29, 2],
  [30, 31],
  [30, 32],
  [30, 1],
  [30, 2],
  [30, 3],
  [30, 4],
  [30, 5],
  [30, 6],
  [30, 7],
  [30, 8],
  [30, 9],
  [30, 10],
  [30, 11],
  [30, 12],
  [30, 13],
  [30, 14],
  [30, 15],
  [30, 16],
  [30, 17],
  [30, 18],
  [30, 19],
  [30, 20],
  [30, 21],
  [30, 22],
  [30, 23],
  [30, 24],
  [30, 25],
  [30, 26],
  [30, 27],
  [30, 28],
  [30, 29],
  [30, 30],
  [30, 31],
  [31, 32],
  [31, 1],
  [31, 2],
  [31, 3],
  [31, 4],
  [31, 5],
  [31, 6],
  [31, 7],
  [31, 8],
  [31, 9],
  [31, 10],
  [31, 11],
  [31, 12],
  [31, 13],
  [31, 14],
  [31, 15],
  [31, 16],
  [31, 17],
  [31, 18],
  [31, 19],
  [31, 20],
  [31, 21],
  [31, 22],
  [31, 23],
  [31, 24],
  [31, 25],
  [31, 26],
  [31, 27],
  [31, 28],
  [31, 29],
  [31, 30],
  [31, 31],
  [32, 32],
];
const obj = {};
const handleObj = (func) => {
  data.forEach((item) => {
    obj[func(...item)] = true;
  });
};

// handleObj((a, b) => a + b);
handleObj(utils.asGridCoord);
// console.log(obj);
window.MainGameMap = {
  DemoRoom: {
    lowerSrc: "/Project_1/links-vorne/images1/maze.png",
    upperSrc: "/Project_1/links-vorne/images1/maze.png",
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
    // data: [
    //   [1, 1],
    //   [8, 6],
    //   [7, 7],
    //   [8, 7],
    // ],
    walls: obj,
    // [utils.asGridCoord(1, 1)]: true,
    // [utils.asGridCoord(8, 6)]: true,
    // [utils.asGridCoord(7, 7)]: true,
    // [utils.asGridCoord(8, 7)]: true, // met de brackets maak je zo een dynamic key in javascript, deze geeft een string terug en evalueert deze dan als true of false. In dit geval is het true.
    // dit is de omgevormde string van 8 en 7 keer 16
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
