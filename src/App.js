import { useState, useEffect } from "react";
import "./App.css";

import { getCategories } from "./fetcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import Category from "./components/Category";
import Layout from "./components/Layout";
import Home from "./components/Home";
import OrderConfirmation from "./components/OrderConfirmation";
import SearchResult from "./components/SearchResult";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />}></Route>
            <Route path="basket" element={<Basket />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route
              path="orderconfirmation"
              element={<OrderConfirmation />}
            ></Route>
            <Route path="search" element={<SearchResult />}></Route>
            <Route
              path="products/:productId"
              element={<ProductDetail />}
            ></Route>
            <Route path="categories/:categoryId" element={<Category />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
