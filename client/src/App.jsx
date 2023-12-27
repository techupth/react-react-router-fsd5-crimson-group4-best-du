import "./App.css";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateProductPage" element={<CreateProductPage />} />
          <Route path="/EditProductPage/:id" element={<EditProductPage />} />
          <Route path="/ViewProductPage/:id" element={<ViewProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
