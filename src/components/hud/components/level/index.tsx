import XpBar from "./components/xp-bar";
import TrashLevel from "./components/trash-level";

function Level() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-5 select-none">
      <TrashLevel />
      <XpBar currentXp={50} maxXp={100} />
      <div className="text-end font-pixellari text-base">TETRAPUNK CO.</div>
    </div>
  );
}

export default Level;
