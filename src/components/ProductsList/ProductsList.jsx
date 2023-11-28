import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  console.log("products: ", products);
  async function getProducts() {
    const response = await axios.get("https://dummyjson.com/products");

    setProducts(response.data.products);
  }

  return (
    <div className=" container mx-auto p-8">
      <button className="btn" onClick={getProducts}>
        Get Product
      </button>
      <div className=" flex justify-between">
        <h1 className=" text-4xl "> New Arrivals </h1>
        <button className=" btn hidden md:block">More products → </button>
      </div>

      <div className="flex flex-wrap justify-between">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <button className=" btn md:hidden"> More products →</button>
    </div>
  );
}
export default ProductList;
