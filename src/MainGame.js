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

    const x = 1;
    const y = 12;
    const player = new Image();
    player.onload = () => {
      this.ctx.drawImage(player, x, y, 40, 40);
      // we snijden de afbeelding uit een grote afbeelding, we geven de breedte en hoogte mee (beginpunt snijden in breedte en hoogte, eindpunt snijden(32))
      // we geven de x en y positie mee waar we de afbeelding willen tekenen (0,0)
    };
    player.src = "/Project_1/links-vorne/images1/player-s.png";

    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0 /*left cut*/,
        0 /*top cut*/,
        32,
        32,
        x * 16 - 8,
        y * 16 - 18,
        32,
        32
      );
    };
    shadow.src =
      "/Project_1/01-pizza-legends-intro/images/characters/shadow.png";
  }
}

// met init maken we een nieuwe image, we assignen een source en dan zeggen we dat we de image willen tekenen op de canvas
// we moeten wachten tot de image geladen is, daarom gebruiken we onload
