import icons from "@/assets/icons";
import BaseResourceDisplay from "../base";

function ProvidersDisplay() {
  return (
    <BaseResourceDisplay
      amount={0}
      name="Proveedores"
      description="Acuerdos informales con negocios y personas."
      iconUrl={icons.characterHeart.src}
      className="text-red-400 "
    />
  );
}

export default ProvidersDisplay;
