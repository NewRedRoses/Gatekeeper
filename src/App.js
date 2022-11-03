import React from "react";

import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
//  file imports
import TopBar from "./Components/TopBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductReviewPage from "./pages/ProductReviewPage";
import SearchPage from "./pages/SearchPage";
import Layout from "./pages/Layout";

function App() {
  //  react routers -> ui.dev/react-router-tutorial
  https: return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Layout />} />
          <Route path="Search" element={<SearchPage />} />
          <Route path="Product" element={<ProductPage />} />
          <Route path="Review" element={<ProductReviewPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
