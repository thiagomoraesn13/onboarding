import { GenericButton } from "@thiagomoraesn13/ui";
import { useNavigate } from "react-router-dom";

export function Page1() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Onboarding • Pagina 1</h2>
      <p className="text-neutral-dk-2">Primeira tela do onboarding.</p>

      <GenericButton
        variant="primary"
        width="full"
        type="button"
        onClick={() => navigate("../page2")}
      >
        Ir para próxima página
      </GenericButton>
    </div>
  );
}
