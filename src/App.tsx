import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topBar";
import Index from "./pages";
import NavBar from "./components/navBar";
import SpecialOffers from "./components/specialOffers";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <SpecialOffers />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
