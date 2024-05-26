import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContent from "auth/LoginContent";
import DashboardContent from "dashboard/DashboardContent";

export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginContent />} />
        <Route path="login" element={<LoginContent />} />
        <Route path="dashboard" element={<DashboardContent />} />
      </Routes>
    </BrowserRouter>
  );
}
