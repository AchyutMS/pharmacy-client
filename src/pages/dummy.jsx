{/* {display && ( */}
<select className='selectBox' value={medName} onChange={e => setMedName(e.target.value)}>
{/* <option value={1}>hello</option>
<option value={2}>hello</option> */}
{allMed.map(m => {
  // if (medName !== ''){
  //   if(m.medName.includes(medName)){
    // if(m.medName.startsWith(medName)){
      // <>
      //   {console.log(m.medName)}
        <option value={m.medName}>hello</option>
      // </>
  //   }
  // }
  
  // if (medName in m) {
  //   <option value={}
  // }
})}

</select>
{/* )} */}







{
    medName !== '' &&
    <select className='selectBox' value={medName} onChange={e => setMedName(e.target.value)}>
      {allMed.map((m, i) => {
        if (m.medName.includes(medName)) {
          // if(m.medName.startsWith(medName)){
          return <option key={i} value={m.medName}>{m.medName}</option>
        }

      }
      )}
    </select>

  }

















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