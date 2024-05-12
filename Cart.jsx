import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Cart = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div>
      {CART.map((cartItem, cartindex) => {
        return (
          <div>
            <img src={cartItem.img} width={40} />
            <span>{cartItem.title}</span>
            <Button variant="dark" onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}>-</Button>
            <span>{cartItem.quantity}</span>
            
           
            <Button variant="dark" onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}>+</Button>
            <span>{cartItem.price * cartItem.quantity}</span>
          </div>
        );
      })}

      <p>
        {" "}
        <span class="badge text-bg-secondary">Total</span>: <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
    </div>
  );
};

export default Cart;
