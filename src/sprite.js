class Sprite {
  constructor(config) {
    // setting up
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };
    // als we een nieuwe sprite creeren, moeten we een nieuwe image meegeven
    // om te checken of de image geladen is, zodat we daarna eerst beginnen met tekenen (draw methode)

    // Shadows
    this.shadow = new Image();
    this.useShadow = true; // config.useShadow || false;
    if (this.useShadow) {
      this.shadow.src =
        "/Project_1/01-pizza-legends-intro/images/characters/shadow.png";
    }
    // if we don't want to user the shadow we never download it.
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    //configuring animation frames
    this.animations = config.animations || {
      // we stellen dit zo in zodat elk game object een eigen animatie kan hebben, maar de standaard is de idleDown
      idleDown: [[0, 0]],
    };

    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0; // we beginnen bij de eerste frame, hier komt een array en werken we met indexes.

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y); // de schaduw moet eerst geladen worden en dan de image.

    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32); // als de afbeelding geladen is, gaan tekenen op het canvas. de && is een shortcut voor if statement, als de afbeelding geladen is, dan tekenen we de afbeelding op het canvas.

    // deze waarden moeten aangepast worden op basis van de grootte van de afbeeldingen, maar daarom staan ze hier hardcoded erin.
    // we snijden de afbeelding uit een grote afbeelding, we geven de breedte en hoogte mee (beginpunt snijden in breedte en hoogte, eindpunt snijden(32))
    // we geven de x en y positie mee waar we de afbeelding willen tekenen (0,0)
    // de context die we doorsturen, daar willen we eein image in tekenen, dat moet this.image zijn, we geven de x en y positie mee waar we de afbeelding willen tekenen (x,y), we geven de breedte en hoogte mee (32,32)
  }
}
