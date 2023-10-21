import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeaderNameProvider } from "./Providers/HeaderNameProvider";
import { UserProvider } from "./Providers/UserProvider";
import { CurrentInfoProvider } from "./Providers/CurrentInfoProvider";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <UserProvider>
      <HeaderNameProvider>
        <CurrentInfoProvider>
          <App />
        </CurrentInfoProvider>
      </HeaderNameProvider>
    </UserProvider>
  </React.StrictMode>
);
