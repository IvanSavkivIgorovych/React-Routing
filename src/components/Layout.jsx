import { Outlet, NavLink } from "react-router-dom";
import React from "react";

export const Layout = (props) => {
  return (
    <>
      <header>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "blue" : "white")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "blue" : "white")}
        >
          About
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "blue" : "white")}
        >
          Posts
        </NavLink>
        <NavLink
          to="/not_found"
          className={({ isActive }) => (isActive ? "blue" : "white")}
        >
          Not Found
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};
