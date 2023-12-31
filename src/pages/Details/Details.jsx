import axios from "axios";
import Header from "../../components/Header/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "./components/Info";
import Footer from "../../components/Footer/Footer";
import Link from "../Home/components/Link";

function Details() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  async function getSingleProduct() {
    const response = await axios.get(
      "https://dummyjson.com/products/" + params.id
    );
    setProduct(response.data);
  }
  useEffect(() => {
    getSingleProduct();
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center">
        <button onClick={getSingleProduct}>Get Product</button>
        LOADING...
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="container mx-auto px-8">
        <Header />
        <BreadCrumbs />
        <Slider product={product} />
        <Info product={product} />
        <Link />
        <Footer />
      </div>
    </div>
  );
}
export default Details;
