export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Size: {product.size}</p>
      <p>Price: {product.price} €</p>
      <p>{product.description}</p>
    </div>
  );
};
