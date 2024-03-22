import React from "react";
import { Outlet } from "react-router-dom";
import '../styles/layouts/HomeLayout.module.sass';

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}