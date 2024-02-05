// Import libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Add these imports
import "./index.css";
import MovieResults from "./sections/MovieResults.tsx";
import MoviePage from "./sections/MoviePage.tsx";
import App from "./App.tsx";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// Define routers
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
  },
  {
    path: "/results",
    element: (
      <QueryClientProvider client={queryClient}>
        <MovieResults />
      </QueryClientProvider>
    ),
  },
  {
    path: "/movie",
    element: (
      <QueryClientProvider client={queryClient}>
        <MoviePage />
      </QueryClientProvider>
    ),
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
