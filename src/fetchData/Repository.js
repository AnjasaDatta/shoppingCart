import axios from 'axios';
const BASE_URL = 'https://anjasashoppingcart.herokuapp.com';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
