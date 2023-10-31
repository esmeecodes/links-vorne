class Sprite {
    constructor(config) {
        // inregelen images
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
    this.isLoaded = true;
    };
    //configuring animation frames

    this.animations = config.animations || {
    idleDown: [
    [0,0]
    ];
    };
    this.currentAnimation = config.currentAnimation || "idleDown";  
    this.currentAnimationFrame = 0; // we beginnen bij de eerste frame 
    
    // Reference the game object 
    this.gameObject = config.gameObject;
    }

    

    draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;

    ctx.drawImage(this.image, x, y, 32, 32);
    }
};
