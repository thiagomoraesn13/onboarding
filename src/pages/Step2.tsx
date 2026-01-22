import { GenericButton } from "@thiagomoraesn13/ui";
import { useNavigate } from "react-router-dom";

export function Step2() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Onboarding • Step 2</h2>
      <p className="text-neutral-dk-2">Segunda tela do onboarding.</p>

      <div className="flex gap-3">
        <GenericButton
          variant="secondary"
          width="full"
          type="button"
          onClick={() => navigate("../step-1")}
        >
          Voltar
        </GenericButton>

        <GenericButton
          variant="primary"
          width="full"
          type="button"
          onClick={() => alert("Finalizou!")}
        >
          Finalizar
        </GenericButton>
      </div>
    </div>
  );
}
