import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <BrowserRouter>
        <nav className="bg-neutral-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-orange-500 text-xl font-bold">Trivia Game</div>
            <ul className="flex space-x-6">
              <li>
                <Link to="/home" className="text-white hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-orange-500 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

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
