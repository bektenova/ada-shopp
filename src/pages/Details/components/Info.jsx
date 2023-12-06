import { Star } from "lucide-react";
import foto3 from "../../../assets/sofa.png";
import foto4 from "../../../assets/avatar_placeholder.png";
import foto5 from "../../../assets/avatar_placeholder (3).png";
import foto6 from "../../../assets/avatar_placeholder (4).png";
import foto7 from "../../../assets/avatar_placeholder (5).png";
import foto8 from "../../../assets/avatar_placeholder (6).png";

function Info({ product }) {
  return (
    <div className="">
      <div className="flex gap-x-0.5  items-center">
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <p className="ml-[7px] text-xs">11 Reviews</p>
      </div>
      <h4 className="text-[40px] font-medium">{product.title}</h4>
      <h6 className="text-base font-normal text-[#6C7275]">
        {product.description}
      </h6>
      <div className="flex gap-x-3 items-center">
        <span className="text-[28px] font-medium text-[#141718]">
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(0)}{" "}
          $
        </span>
        <span className="text-[20px] font-medium   line-through	text-[#6C7275]">
          {product.price} $
        </span>
      </div>
      <div className="mt-[48px] text-[#343839] mb-[12px]">
        <h3 className="text-base font-normal">Offer expires in:</h3>
      </div>
      <div className="flex gap-x-4">
        <h1 className="w-[60px] h-[75px] bg-[#F3F5F7] text-[34px] font-medium  py-[11px] px-[10px]">
          02
        </h1>

        <h1 className="w-[60px] h-[75px] bg-[#F3F5F7] text-[34px] font-medium  py-[11px] px-[10px]">
          12
        </h1>
        <h1 className="w-[60px] h-[75px] bg-[#F3F5F7] text-[34px] font-medium  py-[11px] px-[10px]">
          45
        </h1>
        <h1 className="w-[60px] h-[75px] bg-[#F3F5F7] text-[34px] font-medium  py-[11px] px-[10px]">
          05
        </h1>
      </div>
      <div className=" flex text-xs flex-row gap-x-[25px] text-[#6C7275] mb-[48px]">
        <p className="ml-[15px]">Days</p>
        <p className="ml-[25px]">Hours</p>
        <p className="ml-[15px]">Minutes</p>
        <p className="ml-[7px]">Seconds</p>
      </div>

      <div className=" mb-[8px] ">
        <p className="mb-[8px] text-base font-semibold text-[#6C7275]">
          Measurements
        </p>
        <p className="text-xl font-normal text-[#000]">17 1/2x20 5/8 "</p>
      </div>

      <div className=" mt-[8px]">
        <h3 className="text-base font-semibold text-[#6C7275]">
          Choose Color »
        </h3>
        <p className=" text-xl font-normal text-[#000]">Black</p>
        <div className="flex mt-[20px] gap-x-6 mb-[48px]">
          <img className="w-[130px] h-[130px]" src={foto3} alt="" />
          <img className="w-[130px] h-[130px]" src={foto3} alt="" />
          <img className="w-[130px] h-[130px]" src={foto3} alt="" />
        </div>
      </div>
      <div className="flex mb-[16px]">
        <nav className="flex flex-row w-[80px] h-[32px] bg-[#F5F5F5] rounded items-center justify-center gap-x-3">
          <p>−</p>
          <p>1</p>
          <p>+</p>
        </nav>
        <nav className="w-[220px] h-[32px] border-2 border-[#141718] rounded-lg  ml-[60px] items-center justify-center  ">
          <p className="ml-[71px] mt-[1px]"> ♡ Wishlist </p>
        </nav>
      </div>
      <div className="w-[440px] h-[32px] border-2 border-[#000000] rounded-md text-[#000] text-center mb-[48px]">
        Add to Cart
      </div>

      <div className="flex mb-[8px]">
        <p className="mr-[98px] text-[#6C7275] font-normal text-xs">SKU</p>
        <p className="font-normal text-xs">1117</p>
      </div>
      <div className="flex mb-[8px]">
        <p className="mr-[62px] text-[#6C7275] font-normal text-xs">CATEGORY</p>
        <p className="font-normal text-xs">Living Room, Bedroom</p>
      </div>

      <div className=" font-medium text-lg mb-[40px]">
        <nav className=" ">
          <p className="  text-[#6C7275] ">Additional Info </p>
        </nav>
        <p className="text-[#6C7275]">Questions</p>
        <p>Reviews (11)</p>
      </div>
      <div className="font-medium text-xl mb-[25px]">Customer Reviews</div>

      <div className="flex gap-x-0.5  items-center mb-[10px]">
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} strokeWidth={1.25} />
        <p className="ml-[7px] text-xs ">11 Reviews</p>
      </div>

      <div className="text-base font-semibold ml-[140px] mb-[30px]">
        Tray Table
      </div>
      <div className="w-[440px] h-[50px] border-2 border-[#6C7275] rounded-xl text-[#6C7275]  ">
        <p className="ml-[27px] mt-[13px] text-sm font-normal">
          Share your thoughts
        </p>
        {/* <ArrowRight
          className=" "
          size={28}
          strokeWidth={2.25}
        /> */}
      </div>

      <div className="text-3xl font-medium mt-[40px] mb-[25px]">11 Reviews</div>

      <div className="w-[440px] h-[50px] border-2 border-[#6C7275] rounded-xl text-[#000] mb-[40px] ">
        <p className="ml-[27px] mt-[11px] text-base font-semibold">Newest</p>
      </div>

      <div className="flex mb-[16px] ">
        <div className="flex">
          <img className="h-[72px] w-[72px] " src={foto5} alt="" />
          <div />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold ml-[20px] mt-[5px] mb-[17px]">
              Sofia Harvetz
            </p>
            <div className=" flex ml-[20px]">
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[350px] h-[182px] text-[#353945] mb-[17px]">
        I bought it 3 weeks ago and now come back just to say “Awesome Product”.
        I really enjoy it. At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
        quas molestias excepturi sint non provident.
      </div>

      <div className="flex text-xs font-bold ml-[112px] mb-[16px]">
        <p>Like</p>
        <p className="ml-[18px]">Reply</p>
      </div>

      <div className="flex mb-[40px] ">
        <div className="flex">
          <img className="h-[72px] w-[72px] " src={foto6} alt="" />
          <div />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold ml-[20px] mt-[5px] mb-[17px]">
              Nicolas Jensen
            </p>
            <div className=" flex ml-[20px]">
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[350px] h-[182px] text-[#353945] mb-[17px]">
        I bought it 3 weeks ago and now come back just to say “Awesome Product”.
        I really enjoy it. At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
        quas molestias excepturi sint non provident.
      </div>

      <div className="flex text-xs font-bold ml-[112px] mb-[16px]">
        <p>Like</p>
        <p className="ml-[18px]">Reply</p>
      </div>

      <div className="flex mb-[40px] ">
        <div className="flex">
          <img className="h-[72px] w-[72px] " src={foto7} alt="" />
          <div />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold ml-[20px] mt-[5px] mb-[17px]">
              Anas Ergeshev
            </p>
            <div className=" flex ml-[20px]">
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[350px] h-[182px] text-[#353945] mb-[17px]">
        I bought it 3 weeks ago and now come back just to say “Awesome Product”.
        I really enjoy it. At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
        quas molestias excepturi sint non provident.
      </div>

      <div className="flex text-xs font-bold ml-[112px] mb-[16px]">
        <p>Like</p>
        <p className="ml-[18px]">Reply</p>
      </div>

      <div className="flex mb-[40px] ">
        <div className="flex">
          <img className="h-[72px] w-[72px] " src={foto4} alt="" />
          <div />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold ml-[20px] mt-[5px] mb-[17px]">
              Bertur Taalaybekov
            </p>
            <div className=" flex ml-[20px]">
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[350px] h-[182px] text-[#353945] mb-[17px]">
        I bought it 3 weeks ago and now come back just to say “Awesome Product”.
        I really enjoy it. At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
        quas molestias excepturi sint non provident.
      </div>

      <div className="flex text-xs font-bold ml-[112px] mb-[16px]">
        <p>Like</p>
        <p className="ml-[18px]">Reply</p>
      </div>

      <div className="flex mb-[40px] ">
        <div className="flex">
          <img className="h-[72px] w-[72px] " src={foto8} alt="" />
          <div />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold ml-[20px] mt-[5px] mb-[17px]">
              Travis Jensen
            </p>
            <div className=" flex ml-[20px]">
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[350px] h-[182px] text-[#353945] mb-[17px]">
        I bought it 3 weeks ago and now come back just to say “Awesome Product”.
        I really enjoy it. At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
        quas molestias excepturi sint non provident.
      </div>

      <div className="flex text-xs font-bold ml-[112px] mb-[16px]">
        <p>Like</p>
        <p className="ml-[18px]">Reply</p>
      </div>
    </div>
  );
}

export default Info;
