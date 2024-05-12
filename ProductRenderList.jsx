import React from "react";
import "../App.css";
import { Card, Button } from "react-bootstrap";

const ProductRenderList = ({ product, addtoCart }) => {
  return (
    <div className="flex mt-2">
      {product.map((pItem, pIndex) => {
        return (
          <div style={{ width: "25%" }}>
            <div className="product-item">
              <img src={pItem.img} />
              <p>
                {pItem.title} | {pItem.category}
              </p>
              <p>Rs. {pItem.price} /-   <Button variant="warning" onClick={() => {addtoCart(pItem)} }>Add</Button></p>
             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductRenderList;
