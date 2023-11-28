import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Details from "./pages/Details/Details";
// import SingUp from "./pages/SingUp/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
