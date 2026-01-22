import { Button } from "@thiagomoraesn13/ui";
import { useNavigate } from "react-router-dom";

export function Step1() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Onboarding • Step 1</h2>
      <p className="text-neutral-dk-2">Primeira tela do onboarding.</p>

      <Button className="w-full" onClick={() => navigate("../step-2")}>
        Continuar
      </Button>
    </div>
  );
}
