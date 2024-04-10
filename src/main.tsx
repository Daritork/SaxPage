import ReactDOM from "react-dom/client";
import List from "./components/List.tsx";
import { StrictMode } from "react";
import Navigation from "./components/Navigation.tsx";
import HeaderPage from "./components/HeaderPage.tsx";
import FamousBrands from "./components/FamousBrands.tsx";
import History from "./components/History.tsx";
import Footer from "./components/Footer.tsx";

import "./i18n";

ReactDOM.createRoot(document.getElementById("body")!).render(
  <StrictMode>
    <Navigation />
    <HeaderPage />
    <main>
      <FamousBrands />
      <History />
      <List />
    </main>
    <Footer />
  </StrictMode>
);
