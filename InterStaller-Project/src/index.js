import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>

)