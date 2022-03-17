import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topBar";
import Index from "./pages";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
