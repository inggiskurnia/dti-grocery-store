import { config } from "@/constants/url";
import { Product } from "@/types/product";

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const URL = `${config.BASE_URL}${config.endpoints.products}`;

  const response = await fetch(URL, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  
  return data;
}

export async function getProducts(): Promise<Product[]> {
  const products = await getData();
  return products;
}
