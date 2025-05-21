import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
