import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Test from "./components/Test";
import AdminDashNewPost from "./components/AdminDashNewPost";
import AdminDash from "./components/AdminDash";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dash" element={<AdminDash />} />
        <Route path="/admin/post" element={<AdminDashNewPost />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
