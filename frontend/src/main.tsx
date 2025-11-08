import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./components/home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ImagePage } from "./components/image";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="image/:id" element={<ImagePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
