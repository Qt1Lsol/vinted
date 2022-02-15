import "./assets/css/reset.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Publish from "./pages/Publish";
import NotFound from "./pages/Notfound";
import Payment from "./pages/Payment";

import HeaderVinted from "./components/header";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  // c'est mieux de faire ca car on est sur que l'état changera au refresh de la page
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token);
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  return (
    <Router>
      <HeaderVinted token={token} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/payment" element={<Payment token={token} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
