const game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update
});
function preload() {
  game.load.image();
  game.load.image();
}
function create() {}
function update() {}
