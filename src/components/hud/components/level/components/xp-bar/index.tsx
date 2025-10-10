import Tooltip from "@/shared/components/tooltip";
import Sprite from "@/shared/components/sprite";
import icons from "@/assets/icons";

type Props = {
  currentXp: number;
  maxXp: number;
};

function XpBar({ currentXp, maxXp }: Props) {
  const percentage = Math.min((currentXp / maxXp) * 100, 100);

  return (
    <Tooltip title="Experiencia de juego" position="bottom">
      <div className="flex relative w-[250px] h-[24px]  bg-zinc-950 border-2 border-black">
        <div
          className="absolute top-0 left-0 h-full bg-zinc-950 border-r-2 border-zinc-600"
          style={{
            width: `${percentage}%`,
            backgroundImage:
              "repeating-linear-gradient(-45deg, #52525c  0, #52525c  4px, transparent 4px, transparent 8px)",
          }}
        ></div>
        <div className="absolute bottom-1 left-0 w-[32px] h-[32px]">
          <Sprite src={icons.xp} alt="xp icon" />
        </div>
        <div className="relative m-auto">
          {currentXp}/{maxXp} XP
        </div>
      </div>
    </Tooltip>
  );
}

export default XpBar;
