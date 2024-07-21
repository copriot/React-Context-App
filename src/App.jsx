import {
  BrowserRouter as Saglayici,
  Routes as Yollar,
  Route as Yol,
} from "react-router-dom";
import api from "./utils/api";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import Header from "./components/Header";

function App() {
  return (
    <Saglayici>
      <Header />
      <Yollar>
        <Yol path="/" element={<MainPage />} />
        <Yol path="/sepet" element={<BasketPage />} />
      </Yollar>
    </Saglayici>
  );
}

export default App;
