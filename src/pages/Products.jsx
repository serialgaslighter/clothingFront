import { useEffect, useContext, useState } from "react";
import { AppContext } from "../utils/AppContext.jsx";
import { ProductCard } from "../components/ProductCard.jsx";

export const Products = () => {
  const { productData, setProductData, error, setError } = useContext(AppContext);
  
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const URL = `http://localhost:3000/products?page=${page}&pageLimit=${pageLimit}&${sort}&${filter}`;
      
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProductData(data.products || []);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [page, pageLimit, sort, filter, setProductData, setError]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  return (
    <main>
      {error && <p>Error fetching products: {error.message}</p>}
      <div className="filters">
        <select onChange={handleSortChange} value={sort}>
          <option value="">Sort By</option>
          <option value="price=asc">Price (Low to High)</option>
          <option value="price=desc">Price (High to Low)</option>
          <option value="rating=asc">Rating (Low to High)</option>
          <option value="rating=desc">Rating (High to Low)</option>
        </select>

        <select onChange={handleFilterChange} value={filter}>
          <option value="">Filter By</option>
          <option value="minprice=10&maxprice=50">Price: $10 - $50</option>
          <option value="minprice=50&maxprice=100">Price: $50 - $100</option>
          <option value="category=T-Shirt">Category: T-Shirt</option>
        </select>

        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</button>
        <button onClick={() => setPage(page < pageLimit + 1 ? page + 1: page)}>Next</button>
      </div>

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
