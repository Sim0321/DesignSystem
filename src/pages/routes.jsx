import NotFoundPage from "./NotFoundPage";
// import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterComponentPage from "./RegisterComponentPage";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./BaseLayout";

export const routerInfo = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "upload", element: <RegisterComponentPage /> },
    ],
  },
]);
