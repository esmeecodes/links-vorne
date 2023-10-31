class GameObject {
  // object in de game, dus bv. player/hero, enemy, etc.
  constructor(config) {
    //
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      // create a sprite met een objectstructuur. we geven een config mee, die config moet een src hebben, die src is de afbeelding die we willen tekenen
      gameObject: this,
      src:
        config.src ||
        "/Project_1/01-pizza-legends-intro/images/characters/people/hero.png",
    });
  }
}
