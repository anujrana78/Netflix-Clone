import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
