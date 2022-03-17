import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topBar";
import Index from "./pages";
import NavBar from "./components/navBar";
import SpecialOffers from "./components/specialOffers";
import { Provider } from "react-redux";
import { store } from "./store/reducer";

function App() {
  return (
    <Provider store={store}>
      <TopBar />
      <NavBar />
      <SpecialOffers />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Provider>
  );
}

export default App;
