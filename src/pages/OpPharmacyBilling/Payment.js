// import React, {useState} from 'react'
// import axios from 'axios'
// import MedicinePage from './MedicinePage'
// import DiscountPage from '../DiscountPage'

// export default function Payment() {

//   // user details
//   const [ UID, setUID ] = useState('')
//   const [ status, setStatus ] = useState('')
//   const [ name, setName ] = useState('')
//   const [ phoneNum, setPhoneNum ] = useState('')

//   const [ address, setAddress ] = useState('')
//   const [ sex, setSex ] = useState('')
//   const [ city, setCity ] = useState('')
//   const [ state, setState ] = useState('')
//   const [ country, setCountry ] = useState('')
//   const [ details, setDetails ] = useState(0)
//   const [ medRequired, setMedRequired] = useState('')


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:5000/getPatientData',{UID, phoneNum})
//     .then(res => 
//       (
//         setUID(res.data[0].UID),
//         setName(res.data[0].name),
//         setPhoneNum(res.data[0].phoneNum),
//         setAddress(res.data[0].address),
//         setSex(res.data[0].sex),
//         setCity(res.data[0].city),
//         setState(res.data[0].state),
//         setCountry(res.data[0].country)
//       )
//     )
//     .catch(err => setStatus(err.message))
//   }

//   return (
//     <div>
// <div style={{display:'flex', flexWrap:'wrap', backgroundColor:"yellow", alignItems:"center", justifyContent:'space-even', height:'40vh'}}>
//       <form onSubmit={handleSubmit}>
        
          
//           <div style={{width:"100%"}}>
//             <label>
//               UHID
//               <input type="text" value={UID} onChange={e => setUID(e.target.value)} placeholder="UID" />
//             </label>
//           </div>

//           <div style={{width:"100%"}}>
//             <label>
//               Name
//               <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
//             </label>
//             <label>
//               Age
//               <input type="text" value={''} placeholder="Age" />
//             </label>
//             <label>
//               Sex
//               <input type="text" value={sex} onChange={e => setSex(e.target.value)} placeholder="Sex" />
//             </label>            
//           </div>

//           <div style={{width:"100%"}}>
//             <label>
//               Address
//               <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
//             </label>
//             <label>
//               City
//               <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
//             </label>
//             <label>
//               State
//               <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="State" />
//             </label>
//           </div>

//           <div style={{width:"100%"}}>
//             <label>
//               Country
//               <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="Country" /> 
//             </label>
      
//             <input type="text" value={''} onChange={e => setName(e.target.value)} placeholder="Doctor Name iguess" />
//           </div>

//           <div style={{width:"100%"}}>
//             <label>
//               Phone Number
//               <input type="number"  value={phoneNum} onChange={e => setPhoneNum(e.target.value)} placeholder="Phone Number" />
//             </label>
//           </div>

//         <button type="submit">get data</button>
        
//       </form>
//       </div>

//       <p>{status}</p>

//     </div>
//   )
// }


import React, {useState} from 'react'
import axios from 'axios'
import PaymentMain from './PaymentMain.jsx'

export default function Payment() {

  // user details
  const [ UID, setUID ] = useState('')
  const [ status, setStatus ] = useState('')
  const [ name, setName ] = useState('')
  const [ phoneNum, setPhoneNum ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ sex, setSex ] = useState('')
  const [ city, setCity ] = useState('')
  const [ state, setState ] = useState('')
  const [ country, setCountry ] = useState('')
  const [ details, setDetails ] = useState(0)
  const [ medRequired, setMedRequired] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getPatientData',{UID, phoneNum})
    .then(res => 
      (
        setUID(res.data[0].UID),
        setName(res.data[0].name),
        setPhoneNum(res.data[0].phoneNum),
        setEmail(res.data[0].email),
        setAddress(res.data[0].address),
        setSex(res.data[0].sex),
        setCity(res.data[0].city),
        setState(res.data[0].state),
        setCountry(res.data[0].country)
      )
    )
    .catch(err => setStatus(err.message))
  }

  return (
    <div>
      <h1>Payment</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={UID} onChange={e => setUID(e.target.value)} placeholder="UID" />
        <input type="number"  value={phoneNum} onChange={e => setPhoneNum(e.target.value)} placeholder="Phone NUmber" />
        <button type="submit">get data</button>
      </form>

      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="address" />
      <input type="text" value={sex} onChange={e => setSex(e.target.value)} placeholder="sex" />
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="city" />
      <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="state" />
      <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="country" />
      
      <p>{status}</p>

      <PaymentMain />

    </div>
  )
}
