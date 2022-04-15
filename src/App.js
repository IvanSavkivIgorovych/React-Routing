import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

import { AboutPage, HomePage, PostsPage, NotFoundPage } from "./pages";

function App() {
  return (
    <>
      <header>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/posts">Posts</a>
        <a href="/not_found">Not Found</a>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/not_found" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
