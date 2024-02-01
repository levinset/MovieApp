//import libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import components
import App from "./App.tsx";
import "./index.css";
import MovieResults from "./sections/MovieResults.tsx";
import MoviePage from "./sections/MoviePage.tsx";

//routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/results",
    element: <MovieResults />,
  },
  {
    path: "/movie",
    element: <MoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
