import React from "react";

import { routerInfo } from "./pages/routes";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={routerInfo} />
    </React.StrictMode>
  );
}

export default App;
