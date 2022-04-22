import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";

import Payment from "./pages/Payment";
import ReturnPage from "./pages/ReturnPage";
import CreateUser from "./pages/CreateUser.jsx";
import NoPage from "./pages/NoPage";
import CreateMed from "./pages/CreateMed";
import StoreStock from "./pages/StoreStock"

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path='/store-stock' element={<StoreStock />} />
          <Route path='/OpPharmacyBilling' element={<Payment />} />
          <Route path='/return' element={<ReturnPage />} />
          {/* <Route path='/OpPharmacyBilling' element={<OpPharmacyBilling />} /> */}

          {/* <Route path="payment" element={<Payment />} /> */}
          <Route path="createuser" element={<CreateUser />} />
          <Route path="medicine" element={<CreateMed />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

