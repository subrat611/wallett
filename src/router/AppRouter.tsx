import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { Suspense } from "react";
import MainApp from "../app/MainApp";

import HomePage from "../pages/HomePage";

export const AppRouter = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <Navigate to={ROUTES.APP_BASE} />,
    errorElement: <></>,
  },
  {
    path: ROUTES.APP_BASE,
    element: <MainApp />,
  },
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<p>Loading....</p>}>
        <HomePage />
      </Suspense>
    ),
  },
]);
