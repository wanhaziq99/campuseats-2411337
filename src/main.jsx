import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// --- APPLICATION ENTRY POINT CHEAT SHEET ---
// Purpose: This is the main entry file of your Vite project (usually src/main.jsx or src/index.jsx).
// It acts as the bridge connecting your vanilla HTML file (index.html) to your React component tree.

// 1. IMPORTING DEPENDENCIES
// - 'StrictMode': A built-in React component used for highlighting potential problems in development mode.
// - 'createRoot': The modern React 18+ function used to mount and render React applications into the browser DOM.
// - 'App': Imports your root App component (which contains your router, context providers, and pages).
// - './index.css': Imports global CSS style rules applied across the entire app.

// 2. DOM MOUNTING & RENDERING
// - document.getElementById("root"): Finds the empty anchor element (<div id="root"></div>) waiting inside index.html.
// - createRoot(...): Initializes React's rendering root at that specific DOM node.
// - .render(...): Injects and displays the provided JSX code inside the root container.
createRoot(document.getElementById("root")).render(
  // 3. STRICT MODE WRAPPER
  // <StrictMode> does not render any visible UI on the screen.
  // Instead, while you are developing, it runs extra checks, warns you about
  // deprecated features, and double-checks for accidental side-effects in your code.
  <StrictMode>
    {/* 4. THE ROOT COMPONENT */}
    {/* Renders the master <App /> component, which kicks off your entire application view tree! */}
    <App />
  </StrictMode>,
);
