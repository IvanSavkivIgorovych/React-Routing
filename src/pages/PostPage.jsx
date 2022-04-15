import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PostPage = () => {
  const { state: post } = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      {" "}
      <button onClick={goBack}>Go back</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
};
