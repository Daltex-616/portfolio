import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UniDep from "../pages/portfolio/UniDep";
import App from "../App";

export default router = createBrowserRouter([
    {
        path: "/",
        element:<App/>
      },
      {
        path:"/UniDep",
        element:<UniDep/>
      }
])
