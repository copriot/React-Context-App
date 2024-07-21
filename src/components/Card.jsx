import React from "react";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
const Card = ({ product }) => {
  //context yapısından sepete ekleme fonksiyonunu aldık
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img
          src={product.image}
          alt="product-image"
          height={120}
          className="object-fit-contain"
        />
      </div>
      <div className="card-body">
        <h4 className="text-truncate">{product.title}</h4>
        <p>{product.price}$</p>
        <p>{product.category}</p>
        <button className="w-100 rounded" onClick={() => addToBasket(product)}>
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default Card;
