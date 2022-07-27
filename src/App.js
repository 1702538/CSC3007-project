import "./App.css";
import MilestoneOne from "./Components/MilestoneOneComponent";
import MilestoneTwo from "./Components/MilestoneTwoComponent";
import FinalUI from "./Components/FinalUIComponent";

import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<MilestoneTwo />} />
          <Route path="/milestone-one" element={<MilestoneOne />} />
          <Route path="/milestone-two" element={<MilestoneTwo />} />
          <Route path="/dashboard" element={<FinalUI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
