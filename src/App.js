import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/Layout";
import { AboutPage, HomePage, PostsPage, PostPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
