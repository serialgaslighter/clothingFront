import { useEffect, useContext } from "react";
import { AppContext } from "../utils/AppContext.jsx";
import { ProductCard } from "../components/ProductCard.jsx";

export const Products = () => {
  const { productData, setProductData, error, setError } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const URL = 'http://localhost:3000/products';
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProductData(data.products || []);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [setProductData, setError]);

  return (
    <main>
      {error && <p>Error fetching products: {error.message}</p>}
      {productData.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="product-list">
          {productData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};
