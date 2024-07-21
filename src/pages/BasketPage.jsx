import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="mt-5 pt-5 p-2">
      <h1>Basket</h1>
      <div className="row g-3">
        <div className="col-lg-8">
          {basket.length === 0 ? (
            <div className="text-center my-5">
              <p>Previously add a product into the basket</p>
              <Link className="btn btn-primary" to="/">
                Go to products...
              </Link>
            </div>
          ) : (
            basket.map((product) => (
              <BasketItem key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
