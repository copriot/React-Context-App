// CONTEXT API:
// Uygulamada birden çok bileşenin ihtiyacı olan verileri bileşenlerden bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar.

//Context tuttuğumuz stateleri bileşenlere doğrudan aktarım yapabilen state yönetim aracıdır.
import { createContext, useState, useEffect } from "react";
import api from "../utils/api";
//1.adım context yapısının temelini oluşturur.
export const ProductContext = createContext();
//2. adım verileri bileşenlere aktaracak olan saglayıcıyı ve onun tuttugu verileri tanımlama
export function ProductProvider({ children }) {
  //ürünlerin verisi
  const [products, setProducts] = useState();
  //gösterilecek kategorinin verisi
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    //hangi adrese istek atılacağını belirle
    const url =
      selectedCategory === "all"
        ? "/products" //tüm ürünler
        : `/products/category/${selectedCategory}`; //seçili kategoriye göre ürünler
    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);
  //console.log(products);
  // Sağlayıcı fonksiyonları mutlaka provider'ı return etmeli ve App'i sarmalamalı
  //Value olarak eklenen degerler projedeki bileşenler tarafından erişilebilir olur.

  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
