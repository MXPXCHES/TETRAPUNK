import Resources from "./components/resources";
import Toolbar from "./components/toolbar";
import Level from "./components/level";
import User from "./components/user";
import Credits from "./components/credits";
import Settings from "./components/settings";

function Hud() {
  return (
    <>
      <User />
      <Resources />
      <Toolbar />
      <Level />
      <Settings />
      <Credits />
    </>
  );
}

export default Hud;
