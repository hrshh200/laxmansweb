import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/login" element={<Login />} />
        {/* 404 Page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
