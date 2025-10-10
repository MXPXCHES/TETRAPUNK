"use client";

import dynamic from "next/dynamic";

const PhaserGame = dynamic(
  () => import("@/components/game/components/phaser-game"),
  { ssr: false }
);

function Game() {
  return (
    <div className="absolute w-full h-full" id="viewport">
      <PhaserGame />
    </div>
  );
}

export default Game;
