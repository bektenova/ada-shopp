import { useState } from "react";
import SignUpBg from "../../assets/singUpBg.png";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const [typePassword, setTypePassword] = useState("password");

  function changeTypePassword() {
    if (typePassword === "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  }

  return (
    <div className=" h-screen md:flex md:flex-row">
      <div
        style={{ "--image-url": ` url(${SignUpBg})` }}
        className=" h-[50%] md:h-full bg-[image:var(--image-url)] bg-center bg-contain bg-no-repeat  bg-[#F3F5F7] md:bg-contain py-8 flex-auto"
      >
        <h6 className="text-center text-2xl font-medium">3legant.</h6>
      </div>
      <div className="flex flex-col py-10 px-5 gap-y-6 ">
        <h1 className="text-[40px]">Sign Up</h1>
        <p className="text-[#6C7275] text-base">
          Already have an account?{" "}
          <span className="text-[#38CB89] text-base font-semibold">
            Sign in
          </span>
        </p>

        <form className="flex flex-col gap-y-8">
          <input
            type="text"
            placeholder="Your name"
            name=""
            id=""
            className="border-b border-b-[#6C7275] border-solid pb-[8px]"
          />
          <input
            type="text"
            placeholder="Username"
            name=""
            id=""
            className="border-b border-b-[#6C7275] border-solid pb-[8px]"
          />
          <input
            type="text"
            placeholder="Email address"
            name=""
            id=""
            className="border-b border-b-[#6C7275] border-solid pb-[8px]"
          />

          <div className=" pb-[8px] flex border-b border-b-[#6C7275] border-solid ">
            <input
              type={typePassword}
              placeholder="Password"
              name=""
              id=""
              className="grow "
            />
            <span>
              {typePassword === "text" ? (
                <EyeOff onClick={changeTypePassword} />
              ) : (
                <Eye onClick={changeTypePassword} />
              )}
            </span>
          </div>

          <div className="flex items-center gap-x-3">
            <input type="checkbox" name="" id="" className="" />
            <label htmlFor="confirm" className=" text-xs">
              I agree with Privacy Policy and Terms of Use
            </label>
          </div>
          <button className="btn bg-black text-white px-5 py-2 rounded-lg md:text-center ">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
