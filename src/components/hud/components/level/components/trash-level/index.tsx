import Tooltip from "@/shared/components/tooltip";
import Sprite from "@/shared/components/sprite";
import sprites from "@/assets/sprites";

function TrashLevel() {
  return (
    <div className="flex absolute left-[-80px] top-[-10px] h-[64px] w-[64px]">
      <Tooltip title="Nivel" position="bottom">
        <div className="absolute top-[24px] left-[20px] font-pixellari text-lg">
          01
        </div>
        <Sprite src={sprites.trash} alt="Trash level" />
      </Tooltip>
    </div>
  );
}

export default TrashLevel;
