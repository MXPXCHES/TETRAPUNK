import Tooltip from "@/shared/components/tooltip";
import Sprite from "@/shared/components/sprite";

type Props = {
  amount: number;
  name: string;
  description: string;
  iconUrl?: string;
  className?: string;
};

function BaseResourceDisplay({
  amount,
  name,
  description,
  iconUrl,
  className,
}: Props) {
  return (
    <Tooltip title={name} description={description} position="right">
      <div className="flex flex-row items-center gap-2 relative select-none">
        <div className="absolute bottom-1 flex w-[32px] h-[32px]">
          {iconUrl ? (
            <Sprite src={iconUrl} alt={`name icon`} />
          ) : (
            <div className="flex bg-zinc-600 h-full w-full">
              <div className="m-auto">CUR</div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-baseline gap-2 ">
          <div
            className={`w-[150px] text-end bg-zinc-950 border-2 border-black ${className} pr-2 py-1`}
          >
            {amount}
          </div>
        </div>
      </div>
    </Tooltip>
  );
}

export default BaseResourceDisplay;
