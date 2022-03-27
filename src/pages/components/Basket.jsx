import React, { useState } from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, discount } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;


  return (
    <aside className="block col-1">
      {/* <h2>Cart Items</h2> */}
      <div>

        {cartItems.length !== 0 && (
          <>
            <div className="BasketTP">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{(totalPrice - (totalPrice*discount/100)).toFixed(2)}rs</strong>
              </div>
            </div>

          </>
        )}
        
      </div>
    </aside>
  );
}
