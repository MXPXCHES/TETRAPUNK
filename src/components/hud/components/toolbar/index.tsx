import GuestbookButton from "./components/guestbook";
import DonateButton from "./components/donate";
import StoreButton from "./components/store";

function Toolbar() {
  return (
    <div className="flex flex-row gap-2 absolute bottom-3 right-3">
      <StoreButton />
      <GuestbookButton />
      <DonateButton />
    </div>
  );
}

export default Toolbar;
