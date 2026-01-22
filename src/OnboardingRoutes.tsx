import { Navigate, Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";

export function OnboardingRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="page1" replace />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="*" element={<Navigate to="page1" replace />} />
    </Routes>
  );
}
