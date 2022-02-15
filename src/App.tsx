import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { store } from "./store/store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
