import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import MainLayout from "./Layouts/MainLayout";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
