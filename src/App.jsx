import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router';

import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Services" element={<> </>} />
          <Route path="/Portfolio" element={<> </>} />
          <Route path="/About" element={<> </>} />
          <Route path="/Contact" element={<> </>} />
        </Routes>
      </BrowserRouter>


      
    </>
  );
}

export default App;
