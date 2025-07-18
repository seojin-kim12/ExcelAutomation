import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

const Report = React.lazy(() => import('./pages/Report'));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Report />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;