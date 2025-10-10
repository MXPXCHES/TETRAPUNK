import MoneyDisplay from "./components/money";
import ProvidersDisplay from "./components/providers";

function Resources() {
  return (
    <div className="absolute top-5 left-3 flex flex-col gap-3">
      <MoneyDisplay />
      <ProvidersDisplay />
    </div>
  );
}

export default Resources;
