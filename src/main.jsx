import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./style.css";

import UniDep from "./pages/portfolio/UniDep.jsx";
import DigimonQuiz from "./pages/portfolio/DigimonQuiz.jsx";
import BackendProject from "./pages/portfolio/BackendProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/UniDep",
    element:<UniDep/>
  },
  {
    path:"/DigimonQuiz",
    element:<DigimonQuiz/>
  },
  {
    path:"/BackendProject",
    element:<BackendProject/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>
);
