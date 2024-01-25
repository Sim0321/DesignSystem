import NotFoundPage from "./NotFoundPage";
// import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterComponentPage from "./RegisterComponentPage";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import MainPage from "./MainPage";

export const routerInfo = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "upload", element: <RegisterComponentPage /> },
    ],
  },
]);
