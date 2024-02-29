import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import GetShelters from "./components/getAllShelters.jsx";
import GetShelter from "./components/getShelterById.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>the path not found!</h1>,
  },
  {
    path: "/shelters",
    element: <GetShelters />,
    errorElement: <h1>the path not found!</h1>,
  },
  {
    path: "/shelter/",
    element: <GetShelter />,
    errorElement: <h1>the path not found!</h1>,
  },
  {
    path: "/shelter/update",
    element: <GetShelters />,
    errorElement: <h1>the path not found!</h1>,
  },
  {
    path: "/shelter/delete",
    element: <GetShelters />,
    errorElement: <h1>the path not found!</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
