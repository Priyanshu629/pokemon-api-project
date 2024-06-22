import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./context/searchContext.jsx";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <SearchProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SearchProvider>
  </QueryClientProvider>
);
