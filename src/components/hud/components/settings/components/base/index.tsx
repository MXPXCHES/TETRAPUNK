import Tooltip from "@/shared/components/tooltip";
import Sprite from "@/shared/components/sprite";

interface Props {
  name: string;
  description?: string;
  iconUrl?: string;
}

function BaseSettingsButton({ name, iconUrl }: Props) {
  return (
    <Tooltip title={name} position="left">
      <div className="flex w-[48px] h-[48px] bg-zinc-950 border-2 border-black select-none cursor-pointer">
        <div className="m-auto w-[32px] h-[32px]">
          {iconUrl ? (
            <Sprite src={iconUrl} alt={`${name} button`} />
          ) : (
            <div className="flex bg-black h-full w-full">
              <div className="m-auto">ICON</div>
            </div>
          )}
        </div>
      </div>
    </Tooltip>
  );
}

export default BaseSettingsButton;
