import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3006",
});

export async function getProducts() {
  const { data } = await client("/products");

  return data;
}

export async function getProduct(id) {
  const { data } = await client(`/products/${id}`);

  return data;
}

export async function checkDiscount(code) {
  const { data } = await client(`/discount?code=${code}`);

  return data;
}
