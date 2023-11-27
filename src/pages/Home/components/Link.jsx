// import bg from "../../../assets/Paste image (7).png";

import { Mail } from "lucide-react";

function Link() {
  return (
    <div className="flex flex-col py-[95px] px-[32px] justify-center items-center gap-y-8 bg-[#F2F4F6]">
      <div className="gap-y-2">
        <h1 className="text-[28px] font-semibold">Join Our Newsletter</h1>
        <h5 className="test-sm font-normal text-center">
          Sign up for deals, new products and <br /> promotions
        </h5>
      </div>
      <div className="flex flex-row gap-x-2 text-[#6C7275] ">
        <Mail />
        <p className="w-[219px] text-base font-medium">Email address</p>
        <button className="text-base font-medium">Signup</button>
      </div>
      <hr className="text-[#6C7275] bg-[#6C7275] w-[311px]" />
    </div>
  );
}
export default Link;
