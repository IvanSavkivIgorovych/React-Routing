import { Outlet, Link } from "react-router-dom";
import React from "react";

export const Layout = (props) => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/not_found">Not Found</Link>
      </header>
      <Outlet />
    </>
  );
};
