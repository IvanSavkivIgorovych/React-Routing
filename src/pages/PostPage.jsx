import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PostPage = () => {
  const { state: post } = useLocation();

  return (
    <>
      {" "}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
};
