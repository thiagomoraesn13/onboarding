import { GenericButton } from "@thiagomoraesn13/ui";
import { useOnboarding } from "../onboarding-context";

export function Page2() {
  const { goToHome } = useOnboarding();

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Onboarding • Pagina 2</h2>
      <p className="text-neutral-dk-2">Segunda tela do onboarding.</p>

      <div className="flex  gap-4">
        <GenericButton
          variant="secondary"
          width="full"
          type="button"
          onClick={() => goToHome()}
        >
          voltar para home
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
