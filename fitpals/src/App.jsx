import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/znajdz-fitpala" element={<FindPal />} />
          <Route path="/moje-fitpale" element={<YourActivity />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/zaloguj-sie" element={<Login />} />
          <Route path="/zarejestruj-sie" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
