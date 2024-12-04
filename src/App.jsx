import React from "react";
import Navbar from "./assets/components/Navbar";
import PageTitle from "./assets/components/PageTitle";
import Menu from "./assets/components/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataEntitas from "./assets/pages/DataEntitas";
import DataUtama from "./assets/pages/DataUtama";
import DataPungutan from "./assets/pages/DataPungutan";

const arrayRouter = [
  {
    path: "/",
    element: <DataUtama />,
  },
  {
    path: "/entity",
    element: <DataEntitas />,
  },
  {
    path: "/gain",
    element: <DataPungutan />,
  },
];

const router = createBrowserRouter(arrayRouter);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
