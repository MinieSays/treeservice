import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import TreeTrimming from "./pages/TreeTrimming";
import TreeRemoval from "./pages/TreeRemoval";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tree-trimming-fort-collins" element={<TreeTrimming />} />
          <Route path="/tree-removal-fort-collins" element={<TreeRemoval />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
