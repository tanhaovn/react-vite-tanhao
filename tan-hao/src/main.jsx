import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./components/pages/login.jsx";
import RegisterPages from "./components/pages/register.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPages/>,
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },
  {
    path: "/all-job",
    element: <div>Home</div>,
  },
  {
    path: "/about",
    element: <div>Home</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
