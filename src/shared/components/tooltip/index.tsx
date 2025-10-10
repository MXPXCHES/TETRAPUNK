"use client";

import { useState } from "react";
import { TooltipPosition } from "./types";

interface Props {
  title: string;
  description?: string;
  position?: TooltipPosition;
  children: React.ReactNode;
}

function Tooltip({ children, title, description, position = "top" }: Props) {
  const [visible, setVisible] = useState(false);

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute ${
            positionClasses[position as TooltipPosition]
          } whitespace-nowrap bg-black px-2 py-2 shadow-md z-[99999] select-none`}
        >
          <div className="font-pixellari text-lg">{title}</div>
          {description && <div>{description}</div>}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
