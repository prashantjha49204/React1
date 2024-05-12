import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import data1 from "./components/data";

import ProductRenderList from "./components/ProductRenderList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const [product, setProduct] = useState(data1);

  const [cart, setCart] = useState([]);

  const addtoCart = (data) => {
    console.log(data);
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const added = () => {};

  console.log(product);

  return (
    <>
      <BrowserRouter>
        <Header count={cart.length} />

        <Routes>
          <Route
            path="/"
            element={
              <ProductRenderList product={product} addtoCart={addtoCart} />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
