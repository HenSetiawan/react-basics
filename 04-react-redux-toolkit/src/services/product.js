const getAllProducts = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getAllProducts;
