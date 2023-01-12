import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Competence from "./components/Competence";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Annonce from "./components/Annonce";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    sessionStorage.setItem("isHidden", "0");
  });

  return (
    <Routes>
      <Route element={<Menu />}>
        <Route path="/" element={<Annonce />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/competences" element={<Competence />} />
        <Route path="/formations" element={<Formation />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
