import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./pages/home"; // Example page
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Splash onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
