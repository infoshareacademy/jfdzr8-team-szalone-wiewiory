import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { FindPal } from "./components/FindPal/FindPal";
import { HomePage } from "./components/HomePage/HomePage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Premium } from "./components/Premium/Premium";
import { RegisterLogin } from "./components/RegisterLogin/RegisterLogin";
import { YourActivity } from "./components/YourActivity/YourActivity";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-fitpal" element={<FindPal />} />
        <Route path="/my-fitpal" element={<YourActivity />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<RegisterLogin />} />
        <Route path="/register" element={<RegisterLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
