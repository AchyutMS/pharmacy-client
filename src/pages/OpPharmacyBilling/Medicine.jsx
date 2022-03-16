import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Medicinie = ({ medDetails, changeTotal, medRequired }) => {
    const [ medReq, setMedReq ] = useState(0)
    const [ itemCost, setItemCost ] = useState(0)
    // const [ itemCostDiscount, setItemCostDiscount ] = useState(0)
    // const [ discount, setDscount ] = useState(0)
    const [ error, setError ] = useState('')
    const [ medAmount, setMedAmount] = useState(medDetails.quantity)
    const [ bool, setBool ] = useState(false)

    // console.log(medAmount)

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:5000/medReq/${medDetails._id}`,{medReq})
        .then(res => {
            if(res.data == 'medicine is lesser the req amount'){
                setError(res.data)
            } else {
                setMedAmount(res.data.quantity)
                setItemCost(medReq*medDetails.price)
                
                changeTotal(medReq*medDetails.price)
                medRequired(medReq)
                setError('')
            }
            
        })
        .catch(err => console.log(err.message))

        setBool(true)
    }

    return (
        <div>
            <p>Name : {medDetails.medName}</p>
            <p>expDate : {medDetails.expDate}</p>
            <p>Amount : {medAmount}</p>
            <p>MRP : {medDetails.MRP}</p>
            <p>Tax : {medDetails.tax}</p>
            <p>price : {medDetails.price}</p>
            <form onSubmit={handleSubmit}>
                <input type="number" disabled={bool} required value={medReq} onChange={e => setMedReq(e.target.value)} />
                <button type="submit">required amount of med</button>
            </form>
            <p>{error}</p>
            <p>Cost of item: {itemCost} </p>
        </div>
    )
}

export default Medicinie;