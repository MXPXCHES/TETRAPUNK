import { Scene } from "phaser";
import test from "@/assets/test";

export class Map extends Scene {
  constructor() {
    super("Map");
  }

  controls;

  preload() {
    this.load.image("tiles", test.OutsideTileset.src);
    this.load.image("tiles2", test.buildingTileset.src);
    this.load.tilemapTiledJSON("map", test.tilemapJson);
  }

  create() {
    var map = this.add.tilemap("map");

    console.log(map);

    var tileset1 = map.addTilesetImage("iso-64x64-outside", "tiles");
    var tileset2 = map.addTilesetImage("iso-64x64-building", "tiles2");

    var layer1 = map.createLayer("Tile Layer 1", [tileset1, tileset2]);
    var layer2 = map.createLayer("Tile Layer 2", [tileset1, tileset2]);
    var layer3 = map.createLayer("Tile Layer 3", [tileset1, tileset2]);
    var layer4 = map.createLayer("Tile Layer 4", [tileset1, tileset2]);
    var layer5 = map.createLayer("Tile Layer 5", [tileset1, tileset2]);

    var cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setZoom(1);
    this.cameras.main.setScroll(-930, -150);

    var controlConfig = {
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      acceleration: 0.04,
      drag: 0.001,
      maxSpeed: 0.7,
    };

    this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(
      controlConfig
    );
  }

  update(time, delta) {
    this.controls.update(delta);
  }
}
