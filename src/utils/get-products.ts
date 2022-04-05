import { API_BASE_URL } from "../consts"

export const productsRequest = async () => {
  const res = await fetch(API_BASE_URL);
  const data = await res.json();
  return data.data.products;
}