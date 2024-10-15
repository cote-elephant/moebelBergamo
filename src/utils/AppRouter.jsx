
import { createBrowserRouter } from "react-router-dom";
import  App  from "../App";
import  Category  from "../pages/Category.jsx";
import  {Contact}  from "../pages/Contact.jsx";
import  Home  from "../pages/Home.jsx";
import  {Product}  from "../pages/Product";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Product",
        element: <Product />,
      },
      {
        path: "Category",
        element: <Category />,
      },
    ],
  },
]);