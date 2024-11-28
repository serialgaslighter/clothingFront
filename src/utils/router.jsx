import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Products } from "../pages/Products.jsx";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <Products />
      }
    ]
  }
])