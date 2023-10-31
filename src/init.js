(function () {
  const maingame = new MainGame({
    element: document.querySelector(".game-container"), // grabs the element with the class "game-container", finds the canvas inside of it, and sets it as the canvas property of the MainGame class
  });
  maingame.init();
})();
