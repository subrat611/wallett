import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import MainApp from "../app/MainApp";

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
]);
