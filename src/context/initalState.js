import { fetchCart } from "../utils/fetchLocalStorageData";

const cartInfo = fetchCart();

export const initialState = {
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
