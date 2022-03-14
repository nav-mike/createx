import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topBar";
import Index from "./pages";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
