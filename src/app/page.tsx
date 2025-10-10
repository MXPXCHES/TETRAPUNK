import Game from "@/components/game";
import Hud from "@/components/hud";

function App() {
  return (
    <main className="flex relative w-full h-full overflow-hidden bg-zinc-900">
      <Game />
      <Hud />
    </main>
  );
}

export default App;
