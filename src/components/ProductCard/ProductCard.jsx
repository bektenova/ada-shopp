import ProductImage from "../../assets/sofa.png";

import { Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { toast } from "sonner";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const producktInLocalStorage = JSON.parse(
      localStorage.getItem("__ada-shop:card")
    );

    if (producktInLocalStorage) {
      setProducts(producktInLocalStorage);
    }
  }, []);

  function handleClick() {
    navigate("/products/" + product.id);
  }

  function handleSave(event) {
    event.stopPropagation();

    const previousProduct = JSON.parse(localStorage.getItem("__ada-shop:card"));

    if (previousProduct) {
      const existProduct = previousProduct.find(
        (item) => item.id === product.id
      );

      if (existProduct) {
        const filteredProducts = previousProduct.filter(
          (item) => item.title !== existProduct.title
        );

        localStorage.setItem(
          "__ada-shop:card",
          JSON.stringify(filteredProducts)
        );
        setProducts(filteredProducts);
        toast.info("Вы успешно убрали продукт из избранных");
      } else {
        const result = [...previousProduct, product];
        setProducts(result);

        localStorage.setItem("__ada-shop:card", JSON.stringify(result));
        toast.success("Вы успешно добавили продукт в избранные!");
      }
    } else {
      setProducts([product]);
      localStorage.setItem("__ada-shop:card", JSON.stringify([product]));
    }
  }

  return (
    <div
      className="hover:shadow-2xl hover:scale-[1.05] duration-500 rounded-2xl p-3 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div
        style={{ "--image-url": `url(${ProductImage})` }}
        className=" bg-[#F3F5F7] h-[300px] bg-no-repeat bg-contain max-w-[260px] p-4 flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="uppercase font-bold bg-white px-3 py-1 rounded">
              new
            </span>
            <span className="uppercase font-bold bg-white px-3 py-1 rounded">
              new
            </span>
            <div
              onClick={handleSave}
              className=" bg-white p-1.5 rounded-full shadow-xl"
            >
              <Heart
                className={clsx(
                  "transition-[fill] duration-500 hover:stroke-red-500 hover:fill-red-500",
                  {
                    "stroke-red-500 fill-red-500": Boolean(
                      products.find((item) => item.id === product.id)
                    ),
                  }
                )}
                strokeWidth={1}
              />
            </div>
          </div>

          <span className="bg-[#38CB89] text-white rounded px-3 py-1 font-bold">
            -50%
          </span>
        </div>

        <div className="overflow-hidden">
          <img src={product.thumbnail} className="h-full w-full " alt="" />
        </div>

        <button className="btn bg-black text-white px-6 py-2 rounded-lg">
          Add to Card
        </button>
      </div>

      <div className=" flex flex-col gap-y-1 mt-3">
        <div className="flex gap-x-0.5 ">
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
        </div>
        <h4>{product.title}</h4>
        <div className="flex gap-x-3">
          <span className="text-sm font-bold text-[#141718]">
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(0)}{" "}
            $
          </span>
          <span className="text-sm font-normal line-through	text-[#6C7275]">
            {product.price} $
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
