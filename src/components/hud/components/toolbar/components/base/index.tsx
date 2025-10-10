import Sprite from "@/shared/components/sprite";
import Tooltip from "@/shared/components/tooltip";
import { StaticImageData } from "next/image";

interface Props {
  name: string;
  description?: string;
  iconUrl?: string | StaticImageData;
  onClick: () => void;
}

function BaseToolbarButton({ name, iconUrl, onClick }: Props) {
  return (
    <Tooltip title={name} position="top">
      <button
        className="flex w-[48px] h-[48px] bg-zinc-950 border-2 border-black cursor-pointer select-none"
        onClick={onClick}
      >
        <div className="m-auto w-[32px] h-[32px]">
          {iconUrl ? (
            <Sprite src={iconUrl} alt={`${name} button`} />
          ) : (
            <div className="flex bg-black h-full w-full">
              <div className="m-auto">ICON</div>
            </div>
          )}
        </div>
      </button>
    </Tooltip>
  );
}

export default BaseToolbarButton;
