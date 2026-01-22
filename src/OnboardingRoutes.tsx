import { Navigate, Route, Routes } from "react-router-dom";
import { Step1 } from "./pages/Step1";
import { Step2 } from "./pages/Step2";

export function OnboardingRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="step-1" replace />} />
      <Route path="step-1" element={<Step1 />} />
      <Route path="step-2" element={<Step2 />} />
      <Route path="*" element={<Navigate to="step-1" replace />} />
    </Routes>
  );
}
