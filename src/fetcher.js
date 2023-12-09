const BASE_URL = "http://localhost:3000/";

const fetcher = async (url) => {
  let responseObject = { errorMessage: "", data: [] };
  try {
    const response = await fetch(BASE_URL + url);
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    const data = await response.json();
    responseObject.errorMessage = "";
    responseObject.data = data;
  } catch (error) {
    responseObject.errorMessage = error.message;
  }
  return responseObject;
};

export const getCategories = () => {
  return fetcher("categories");
};

export const getProducts = (id) => {
  return fetcher("products?catId=" + id);
};

export const getProductById = (id) => {
  return fetcher("products/" + id);
};

export const getProductsByQuery = (query) => {
  return fetcher("products?q=" + query);
};
