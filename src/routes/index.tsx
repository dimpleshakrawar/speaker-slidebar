import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
        path: "*",
        element: <h2>Oops! Page not found.</h2>
      },
  ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );