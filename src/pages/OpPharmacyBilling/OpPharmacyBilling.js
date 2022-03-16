// import React, {useState} from 'react'
// import { Margin, Payments } from '@mui/icons-material';
// import { Box } from '@mui/material';
// import MedicinePage from './MedicinePage';
// //import Navbar from '../Navbar/Navbar';
// import Payment from './Payment';


// function OpPharmacyBilling() {
//   const [ details, setDetails ] = useState(0)
//   const [ medRequired, setMedRequired] = useState('')
//   return (
//     <>
//     <div style={{display:'flex',flexWrap:'wrap'}}>
//       <div style={{backgroundColor:'#FFE5B4',width:"70%", height:"40vh"}}>
//         <Payment />
//       </div>
//       <div style={{backgroundColor:'pink',width:"30%", height:"40vh"}}>
//       2
//       </div>
//       <div style={{backgroundColor:'green',width:"100%", height:"50vh"}}>
//       <MedicinePage
//         Total={total => setDetails(total)}
//         medReq={med => setMedRequired(med)}
//       />
//       </div>
//       {/* <div style={{backgroundColor:'blue',width:"100%", height:"25vh"}}>
//         4
//       </div> */}
//     </div>
//     </>
//   )
// }

// export default OpPharmacyBilling;



import React, {useState} from 'react'
import { Margin, Payments } from '@mui/icons-material';
import { Box } from '@mui/material';
import MedicinePage from './MedicinePage';
//import Navbar from '../Navbar/Navbar';
import Payment from './Payment';


function OpPharmacyBilling() {
  const [ details, setDetails ] = useState(0)
  const [ medRequired, setMedRequired] = useState('')
  return (
    <>
      <Payment />
      <MedicinePage
        Total={total => setDetails(total)}
        medReq={med => setMedRequired(med)}
      />
    </>
  )
}

export default OpPharmacyBilling;

