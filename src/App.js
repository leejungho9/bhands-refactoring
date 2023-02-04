import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contatc" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
