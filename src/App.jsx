import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RooterLayout from "./layouts/RooterLayout";
import Home from "./pages/Home";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RooterLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="p-0">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
