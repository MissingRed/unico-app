import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductView></ProductView>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
