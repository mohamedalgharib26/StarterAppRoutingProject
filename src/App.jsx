import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>App</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
