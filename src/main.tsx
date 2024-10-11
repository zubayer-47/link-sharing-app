import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import DataProvider from "./context/DataProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />

        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
);
