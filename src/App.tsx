import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Todos from "./components/Todos";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer devName="Webify" />
    </>
  );
}

export default App;
