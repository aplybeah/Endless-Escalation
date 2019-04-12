const handleCORS = new XMLHttpRequest();
handleCORS.open("GET", "/");
handleCORS.setRequestHeader("Content-Type", "text/html");

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
const game = new Phaser.Game(config);
function preload() {
  this.load.setBaseURL("http://labs.phaser.io");
  this.load.image("sky", "assets/sky_purple.png");
  this.load.image("ground", "assets/platform.png");
  this.load.spritesheet("dude", "assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  });
}
function create() {
  this.add.image(400, 300, "sky");
}
function update() {}
