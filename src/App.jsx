import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";  // Import About component
import NoPage from "./pages/NoPage"; // Import NoPage component

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />    {/* About Page Route */}
          <Route path="*" element={<NoPage />} />       {/* Catch-all Route for NoPage */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
