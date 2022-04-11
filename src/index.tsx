import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
