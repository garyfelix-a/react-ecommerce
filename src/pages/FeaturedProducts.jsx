import { useEffect, useState } from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4") // Fetch 4 products
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error Fetching Data:", error));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
