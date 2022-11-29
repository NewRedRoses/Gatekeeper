import React from "react";

import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

//  file imports
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductReviewPage from "./pages/ProductReviewPage";
import SearchPage from "./pages/SearchPage";

function App() {
  //  react routers -> ui.dev/react-router-tutorial
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/review" element={<ProductReviewPage />} />
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
