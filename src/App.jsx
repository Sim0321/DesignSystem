import React from "react";

import { routerInfo } from "./pages/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routerInfo} />
    </>
  );
}

export default App;
