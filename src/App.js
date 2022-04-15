import logo from "./logo.svg";
import "./App.css";

import { AboutPage, HomePage, PostsPage, NotFoundPage } from "./pages";

function App() {
  return (
    <header>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/posts">Posts</a>
      <a href="/not_found">Not Found</a>
    </header>
  );
}

export default App;
