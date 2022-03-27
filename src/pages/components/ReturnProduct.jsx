import React, { useEffect, useState } from 'react';

export default function ReturnProduct(props) {
  const { product } = props;
  const [returnQuantity, setReturnQuantity] = useState('')

  const [total, setTotal] = useState(0) 

  const handleReturnQuantity =(e) =>{
    setReturnQuantity(e.target.value)
    setTotal((returnQuantity*product.price))
    // console.log("returnQuantity: ",returnQuantity)
    // console.log('total: ',total)
  }


  return (
    <tr>
      <td>{product.medName}</td>
      <td>{product.MRP}rs</td>
      <td>{product.tax}rs</td>

      <td>{product.expDate.split('T')[0].split("-").reverse().join("-")}</td>
      <td>{product.quantity}</td>
      <td>{product.price}rs</td>

      <td>{product.price * product.quantity}</td>

      <td>
        <input required min='0' className='ProdInputBox' type="number" onChange={handleReturnQuantity} />
      </td>

      <td>{returnQuantity*product.price}</td>    
    </tr>

  );
}