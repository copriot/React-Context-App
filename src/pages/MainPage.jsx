//context yapılarına abone olmamızı sağlayan hook
import React, { useContext } from "react";
//abone olunan context bileşeni
import { ProductContext } from "../context/ProductContext";
import Card from "../components/Card";
import Loader from "../components/Loader";
const MainPage = () => {
  //ürünler contextine abone ol
  const { products, selectedCategory } = useContext(ProductContext);
  //console.log(products);
  return (
    <div className="container my-5 pt-5 p-md-5">
      <h1>{selectedCategory}</h1>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-5 mt-5">
        {!products ? (
          <Loader />
        ) : (
          products.map((item) => <Card key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
};

export default MainPage;
