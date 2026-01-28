import { createContext, useContext } from "react";

export type OnboardingConfig = {
  goToHome: () => void;
  theme: "noverde" | "dotz";
  assetsBaseUrl: string; // "/assets/design-tokens"
};

const OnboardingContext = createContext<OnboardingConfig | null>(null);

export function OnboardingProvider({
  value,
  children,
}: {
  value: OnboardingConfig;
  children: React.ReactNode;
}) {
  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error("useSimulation must be used inside OnboardingProvider");
  }
  return ctx;
}
