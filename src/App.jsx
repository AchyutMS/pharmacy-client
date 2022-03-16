import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";
import OpPharmacyBilling from './pages/OpPharmacyBilling/OpPharmacyBilling';

import Payment from "./pages/Payment";
import CreateUser from "./pages/CreateUser.jsx";
import NoPage from "./pages/NoPage";
import CreateMed from "./pages/CreateMed";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path='/OpPharmacyBilling' element={<OpPharmacyBilling />} />

          <Route path="payment" element={<Payment />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="medicine" element={<CreateMed />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}


// import { Route, Routes } from 'react-router-dom';
// import Header from './pages/Header/Header';
// import Navbar from './pages/Navbar/Navbar';
// import OpPharmacyBilling from './pages/OpPharmacyBilling/OpPharmacyBilling';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//        <Routes>
//         <Route path='/' element={<Header />} />
//         <Route path='/OpPharmacyBilling' element={<OpPharmacyBilling />} />
//       </Routes>
//     </div>
//   )
// }

// export default App;