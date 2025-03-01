import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Select the root element from the DOM
const container = document.getElementById("root");
const rootInstance = createRoot(container);

// Render the application inside the root
rootInstance.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

