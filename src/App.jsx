import { useState } from "react";
import "./assets/Globals.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Destinations from "./Pages/Destinantions/Destinations";
import Trips from "./Pages/Trips/Trips";
import Contacts from "./Pages/Contacts/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/Trips" element={<Trips />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
