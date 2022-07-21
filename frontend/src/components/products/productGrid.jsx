import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductGrid = () => {
  const [products, setProducts] = React.useState([]);

  const baseURL = "http://localhost:3005";

  useEffect(() => {
    setProducts([]);
    // let rows, total = 0;
    axios.get(`${baseURL}/products`).then((response) => {
      setProducts(response.data.products);
      // total = response.data.filtered;
      // rows = response.data.records.length;
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 p-2 bg-zinc-300">
      {products &&
        products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
    </div>
  );
};

export default ProductGrid;
