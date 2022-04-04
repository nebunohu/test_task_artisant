import { API_BASE_URL } from "../consts"

export const getProducts = async () => {
  const res = await fetch(API_BASE_URL);
  const data = await res.json();
  return data;
}