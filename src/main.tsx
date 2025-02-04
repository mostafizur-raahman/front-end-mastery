import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import UseStateExample from "./components/UseStateExample.tsx";
import UseReducer from "./components/UseReducer.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <UseStateExample /> */}
        <UseReducer />
    </StrictMode>
);
