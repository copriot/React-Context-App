import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";
//temel
export const BasketContext = createContext();
//saglayici
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);
  const addToBasket = (newProduct) => {};
  return <BasketContext.Provider value={{}}>{children}</BasketContext.Provider>;
};
