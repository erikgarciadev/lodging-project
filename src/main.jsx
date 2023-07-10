import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./context/auth";
import ModalLoginRegisterProvider from "./context/modal-login-register";
import LodgingsPage from "./pages/lodgings";
import ReservationPage from "./pages/reservation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lodgings",
    element: <LodgingsPage />,
  },
  {
    path: "/reservation/:lodging_id",
    element: <ReservationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalLoginRegisterProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ModalLoginRegisterProvider>
    </AuthProvider>
  </React.StrictMode>
);
