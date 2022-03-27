import React, { useState } from 'react'
import Product from './Product';
import ReturnProduct from './ReturnProduct';

export default function ReturnMain(props) {

  const { medArray } = props;
  
  const [articles, setArticles] = useState([])

  console.log("Cartitems medArray: ", medArray[0].cartItems)

  return (
  <div>
   
   <div className="col">
      <table>
      <tr>
            <th>Name</th>
            <th>MRP</th>
            <th>tax</th>
            <th>expireDate</th>
            <th>quantity</th>
            <th>price</th>
            <th>Item Cost</th>
            {/* <th>discount</th>
            <th>After discount</th> */}
            <th>Return Quantity</th>
            <th>Amount to Return</th>
            <th></th>
          </tr>

          {medArray[0].cartItems.map((product) => (
              <ReturnProduct key={product._id} product={product} ></ReturnProduct>
          ))}

        </table> 
    </div>


</div> 
)

  
}




