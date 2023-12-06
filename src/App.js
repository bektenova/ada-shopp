import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Details from "./pages/Details/Details";
import SingUp from "./pages/SingUp/SingUp";
import SignIn from "./pages/SingIn/SingIn";

// import SingUp from "./pages/SingUp/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/sing-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
