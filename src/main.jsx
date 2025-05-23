import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CartContext from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartContext>
    <App />
  </CartContext>
);
