import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { OnboardingRoutes } from "@thiagomoraesn13/onboarding";

function Home() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Playground • Onboarding</h1>
      <a className="underline" href="/onboarding">
        Ir para /onboarding
      </a>
    </div>
  );
}

export function PlaygroundApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding/*" element={<OnboardingRoutes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
