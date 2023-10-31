class MainGame {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d"); // to help us with drawing
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      // console.log("game loop on");
      requestAnimationFrame(() => {
        step(); // this is step calling step again
      });
    };
    step();
  }
  init() {
    this.map = new MainGameMap({window.MainGameMap.DemoRoom});
    this.startGameLoop();
  }
}

// we willen de MainGame vertellen waar de
// met init maken we een nieuwe image, we assignen een source en dan zeggen we dat we de image willen tekenen op de canvas
// we moeten wachten tot de image geladen is, daarom gebruiken we onload
