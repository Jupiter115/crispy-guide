import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
