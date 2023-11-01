class TitleScreen {
  constructor({ progress }) {
    this.progress = progress; // deze heb ik nog niet gemaakt
  }

  getOptions() {
    return [
      {
        label: "New Game",
        description: "Start a new adventure",
        handler: () => {
          this.close();
          resolve();
          //
        },
      },
      // maybe have a continue option here
    ];
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("TitleScreen");
  }

  close() {
    // this.keyboardMenu.end();
    this.element.remove();
  }

  init(container) {
    return new Promise((resolve) => {
      this.createElement();
      container.appendChild(this.element);
      this.keyboardMenu = new KeyboardMenu();
      this.keyboardMenu.init(this.element);
      this.keyboardMenu.setOptions(this.getOptions(resolve));
    });
  }
}
