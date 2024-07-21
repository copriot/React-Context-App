import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";
import { toast } from "react-toastify";

// temel
export const BasketContext = createContext();
// sağlayıcı
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("sepet", []);

  // sepete ürün ekleyen fonksiyon
  const addToBasket = (newProduct) => {
    console.log(newProduct);
    //* 1. Bu üründen sepette var mı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);
    //* Ürün sepette varsa miktarını 1 arttır
    if (found) {
      // a) bulunan ürünüün miktarını 1 arttır(nesneyi güncelle)
      const updated = { ...found, amount: found.amount + 1 };
      // b) sepet dizisindeki eski ürün yerine güncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      // c) statei güncelle
      setBasket(newBasket);

      toast.success(`Product amount increased.(${found.amount + 1})`);
    } else {
      //* 3. Ürün sepette yoksa ürünü sepete ekle (miktar:1)
      setBasket(basket.concat({ ...newProduct, amount: 1 }));
      console.log(basket);
      toast.success("Product added to the basket");
    }
  };
  // sepetten ürünü kaldıran fonksiyon
  const removeFromBasket = (delete_id) => {
    // silinecek elemanın dışarısında kalanlar ile yeni dizi oluşturur
    const filtred = basket.filter((i) => i.id !== delete_id);
    console.log(filtred);
    console.log("diziden elemanı sil");
    // statei güncelle
    setBasket(filtred);
    toast.error("Product has been removed into basket");
  };

  // miktar azaltan fonksiyon
  const decreaseAmount = (delete_id) => {
    // 1)Miktarı azaltılacak olan elemanı sepette bul
    const found = basket.find((i) => i.id === delete_id);

    // 2) miktarı 1 den fazla ise > miktarını 1 azalt
    if (found.amount > 1) {
      // elemanın güncel nesnesini oluştur.
      const updated = { ...found, amount: found.amount - 1 };
      toast.success("product reduced from the basket");
      // dizideki elemanın eski halie yerine güncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      // statei güncelle
      setBasket(newBasket);
    } else {
      removeFromBasket(delete_id);
    }
  };

  return (
    <BasketContext.Provider value={{ addToBasket, basket, decreaseAmount }}>
      {children}
    </BasketContext.Provider>
  );
};
