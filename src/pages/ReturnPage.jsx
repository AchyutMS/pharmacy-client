import React, { useState } from 'react'
import axios from 'axios'

import ReturnMain from './components/ReturnMain'

export default function ReturnPage() {

    const [medArray, setMedArray] = useState([])
    const [billNo, setBillNo] = useState('')
    const [searchOn, setSearchOn] = useState(false)

    const billNoHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/return/${billNo}`,{billNo})
        .then(res => (
            setMedArray(res.data), setSearchOn(true)
            // setMedArray(arr => [res.data]), setSearchOn(true)
        ))
        .catch(err => console.log(err.message))
      }
      //setMedArray( arr => [...arr, res.data])
      console.log("Return Page",medArray)

    return (
        <div>
            <form onSubmit={billNoHandler}>
                <input type="text" value={billNo} required placeholder='Bill No.' onChange={e => setBillNo(e.target.value)} />
                <button type="submit">Search</button>
            </form>

        {searchOn ? <ReturnMain medArray={medArray} />:console.log('waiting for input')}

        <h3>Total Amount To Return:</h3>
             
        </div>
    )
}


