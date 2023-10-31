class MainGame {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d"); // to help us with drawing
    this.map = null;
  }

  startGameLoop() {
    // all the drawing happens in a loop that keeps calling itself. this is the game loop
    const step = () => {
      // console.log("game loop on");

      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // draw lower layer
      this.map.drawLowerImage(this.ctx);

      // draw game objects
      Object.values(this.map.gameObjects).forEach((gameObject) => {
        gameObject.x += 0.02; // making the hero move
        gameObject.sprite.draw(this.ctx); // we tekenen de sprite van elk game object
      });

      /* dit stukje code gaat door alle game-objecten in de this.map.gameObjects-verzameling en roept de draw-methode aan op de sprite van elk object, om ze op het scherm weer te geven */

      // draw upper layer
      this.map.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        step(); // this is step calling step again
      });
    };
    step();
  }
  init() {
    this.map = new MainGameMap(window.MainGameMap.DemoRoom); // we creeren een nieuwe instance van MainGameMap. als we nu de game in een andere ruimte willen starten, kunnen we hier de maap van de ruimte meegeven of veranderen.
    this.startGameLoop();
  }
}

// we willen de MainGame vertellen waar de
// met init maken we een nieuwe image, we assignen een source en dan zeggen we dat we de image willen tekenen op de canvas
// we moeten wachten tot de image geladen is, daarom gebruiken we onload
