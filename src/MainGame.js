class MainGame {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d"); // to help us with drawing
  }

  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = "/Project_1/01-pizza-legends-intro/images/maps/DemoLower.png";

    // place some game objects
    const hero = new GameObject({
      x: 5,
      y: 6,
    });

    const secondGuy = new GameObject({
      x: 10,
      y: 10,
      src: "/Project_1/01-pizza-legends-intro/images/characters/people/npc1.png",
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      secondGuy.sprite.draw(this.ctx);
    }, 200);
  }
}

// met init maken we een nieuwe image, we assignen een source en dan zeggen we dat we de image willen tekenen op de canvas
// we moeten wachten tot de image geladen is, daarom gebruiken we onload
