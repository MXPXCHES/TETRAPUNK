import { Scene } from "phaser";
import test from "@/assets/test";

export class Map extends Scene {
  constructor() {
    super("Map");
  }
  preload() {
    this.load.image("tiles", test.OutsideTileset.src);
    this.load.image("tiles2", test.buildingTileset.src);
    this.load.tilemapTiledJSON("map", test.tilemapJson);
  }

  create() {
    const map = this.add.tilemap("map");

    console.log(map);

    const tileset1 = map.addTilesetImage("iso-64x64-outside", "tiles");
    const tileset2 = map.addTilesetImage("iso-64x64-building", "tiles2");

    const layer1 = map.createLayer("Tile Layer 1", [tileset1!, tileset2!]);
    const layer2 = map.createLayer("Tile Layer 2", [tileset1!, tileset2!]);
    const layer3 = map.createLayer("Tile Layer 3", [tileset1!, tileset2!]);
    const layer4 = map.createLayer("Tile Layer 4", [tileset1!, tileset2!]);
    const layer5 = map.createLayer("Tile Layer 5", [tileset1!, tileset2!]);

    this.cameras.main.setZoom(1);
    this.cameras.main.setScroll(-930, -150);
  }
}
