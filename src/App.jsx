import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";

import Payment from "./pages/Payment";
import CreateUser from "./pages/CreateUser.jsx";
import NoPage from "./pages/NoPage";
import CreateMed from "./pages/CreateMed";

import './App.css'
import ReturnPage from "./pages/ReturnPage";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path='/OpPharmacyBilling' element={<Payment />} />
          <Route path='/return' element={<ReturnPage />} />

          <Route path="createuser" element={<CreateUser />} />
          <Route path="medicine" element={<CreateMed />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

