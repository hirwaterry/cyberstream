import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <BrowserRouter>

        <main className="container mx-auto px-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
