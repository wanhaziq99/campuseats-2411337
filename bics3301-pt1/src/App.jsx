// ============================================================
//  BICS 3301 · Practical Test Part 1
//  Name       :Wan Muhammad Haziq Nur Iman Bin Wan Mohd Azman
//  Matric No. :2411337
//  Section    :1
// ============================================================

// App wires the three questions to their own routes.
// Each question is independent: a mistake in one cannot break the others.
// Fill in your details above. Do not change the code below.
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./shared/Layout.jsx";
import HomePage from "./shared/HomePage.jsx";
import Q1Page from "./q1/Q1Page.jsx";
import Q2Page from "./q2/Q2Page.jsx";
import Q3App from "./q3/Q3App.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout has no path: it wraps every page with the top bar. */}
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="q1" element={<Q1Page />} />
          <Route path="q2" element={<Q2Page />} />
          {/* "q3/*" means: /q3 and every page under it (for example /q3/item/3).
              Q3App has its own <Routes> for those pages. */}
          <Route path="q3/*" element={<Q3App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
