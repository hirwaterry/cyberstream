import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Router } from "lucide-react";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
