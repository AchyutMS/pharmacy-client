import React from 'react';
import Product from './Product';

export default function UserInfo(props) {
  const { userData } = props;
  return (
    <div className='inputBoxArea'>
    <form>
      <div className='UserInputBox'>
        <div className='inputBox'>
          <label>UID : </label>
          <input value={userData[0].UID} disabled  />
        </div>
        <div className="inputBox">
          <label>Phone : </label>
          <input value={userData[0].phoneNum}  disabled/>
        </div>
      </div>
    </form>

    <div className='otherInput'>
      <div className="inputBox">
        <label>Name : </label>
        <input type="text" value={userData[0].name} disabled />
      </div>
      <div className="inputBox">
        <label>Email : </label>
        <input type="email" value={userData[0].email} disabled />
      </div>
      <div className="inputBox">
        <label>Address : </label>
        <input type="text" value={userData[0].address} disabled />
      </div>
      <div className="inputBox">
        <label>Gender : </label>
        <input type="text" value={userData[0].sex} disabled />
      </div>
      <div className="inputBox">
        <label>City : </label>
        <input type="text" value={userData[0].city} disabled />
      </div>
      <div className="inputBox">
        <label>State : </label>
        <input type="text" value={userData[0].state} disabled />
      </div>
      <div className="inputBox">
        <label>Country : </label>
        <input type="text" value={userData[0].country} disabled />
      </div>
    </div>
    </div>
  );
}
