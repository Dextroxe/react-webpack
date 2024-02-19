import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import App from "./app";
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found");
}
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
