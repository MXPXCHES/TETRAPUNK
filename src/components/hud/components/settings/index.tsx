import MusicButton from "./components/music";
import ZoomInButton from "./components/zoom-in";
import ZoomOutButton from "./components/zoom-out";

function Settings() {
  return (
    <div className="flex flex-col gap-3 absolute right-3 top-[100px]">
      <MusicButton />
      <ZoomInButton />
      <ZoomOutButton />
    </div>
  );
}

export default Settings;
