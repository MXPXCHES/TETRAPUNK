import { AUTO, Game } from "phaser";
import { Boot } from "./scenes/boot";
import { Map } from "./scenes/map";
import { Preloader } from "./scenes/preloader";

const config: Phaser.Types.Core.GameConfig = {
  width: 1920,
  height: 1080,
  type: AUTO,
  parent: "viewport",
  transparent: true,
  scene: [Boot, Preloader, Map],
  scale: {
    mode: Phaser.Scale.NONE,
  },
  pixelArt: true,
};

const StartGame = () => {
  const game = new Game({ ...config });

  return game;
};

export default StartGame;
