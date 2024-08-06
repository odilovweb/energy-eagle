import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RooterLayout() {
  return (
    <div className="flex flex-col h-screen ">
      {" "}
      <Navbar />
      <main className="align-element flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default RooterLayout;
