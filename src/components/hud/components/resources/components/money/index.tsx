import icons from "@/assets/icons";
import BaseResourceDisplay from "../base";

function MoneyDisplay() {
  return (
    <BaseResourceDisplay
      amount={50000}
      name="Plata en efectivo (pesos chilenos)"
      description="Se obtiene vendiendo recursos, cachureos y recibiendo donaciones."
      iconUrl={icons.coins.src}
      className="text-yellow-400 "
    />
  );
}

export default MoneyDisplay;
