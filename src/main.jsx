import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <UserProvider>
     <React.StrictMode>
       <App />
     </React.StrictMode>
    </UserProvider>
  </BrowserRouter>
);
