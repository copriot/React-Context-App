import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketItem = ({ product }) => {
  const { addToBasket, decreaseAmount } = useContext(BasketContext);

  return (
    <div className="d-flex align-items-center gap-3 gap-md-4 bg-info rounded p-3 p-md-4">
      <div className="border bg-white rounded-3">
        <img
          className="object-fit-contain"
          src={product.image}
          height={80}
          width={80}
          alt={product.title}
        />
      </div>
      <div>
        <p className="fw-bold text-truncate">
          {product.title.length > 20
            ? product.title.slice(0, 20) + "..."
            : product.title}
        </p>
        <p>{product.category}</p>
        <p>{product.rating.rate}</p>
      </div>

      <div className="flex-grow-1 d-flex flex-column-reverse flex-md-row gap-4 align-items-center">
        <div className="bg-dark rounded-5 d-flex gap-4 align-items-center overflow-hidden btn-wrapper">
          <button onClick={() => decreaseAmount(product.id)}>-</button>
          <button>{product.amount}</button>
          <button onClick={() => addToBasket(product)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
