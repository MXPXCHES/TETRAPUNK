"use client";

import sprites from "@/assets/sprites";
import Sprite from "@/shared/components/sprite";
import Tooltip from "@/shared/components/tooltip";

function User() {
  return (
    <div className="absolute right-3 top-3 h-[64px] w-[64px] bg-zinc-950 cursor-pointer">
      <Tooltip title="Trauko" description="Trash Dealer 🦝" position="left">
        <Sprite src={sprites.trauko} alt="Trauko avatar" isPixelated={false} />
      </Tooltip>
    </div>
  );
}

export default User;
