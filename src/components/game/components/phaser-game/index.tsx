import { useEffect, useRef } from "react";
import StartGame from "@/game";

export default function PhaserGame() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    gameRef.current = StartGame();
    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return null;
}
