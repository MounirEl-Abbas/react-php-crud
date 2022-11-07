import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Insert from "./components/Insert";
import Edit from "./components/Edit";
import View from "./components/View";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/insert" element={<Insert />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
