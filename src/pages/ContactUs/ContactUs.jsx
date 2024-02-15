import Header from "../../components/Header/Header";
import Contacts1 from "../../assets/contact1.png";
import addpoint from "../../assets/addpoint.png";
import { Home, Mail, Phone } from "lucide-react";

function ContactUs() {
  return (
    <div className="px-8 container mx-auto">
      <Header />
      <h1 className="text-3xl font-medium mb-6 md:text-6xl md:mr-[25%]">
        We believe in sustainable decor. We’re passionate about life at home.
      </h1>

      <p className="text-base text-gray-600 font-normal md:mr-[25%]">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>

      <section className="flex flex-col mt-10 md:flex-row ">
        <div className="md:basis-[50%]">
          <img src={Contacts1} alt="contacts-1" className="w-full" />
        </div>
        <div className="bg-[#F3F5F7] px-4 md:px-16 py-20 flex flex-col gap-y-4 items-start md:basis-[50%] md:justify-center">
          <h3 className="text-xl font-medium md:text-4xl"> About Us</h3>
          <p className="text-sm text-gray-600 font-normal md:text-base">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>

          <button className="border-b border-b-black">Shop Now &rarr;</button>
        </div>
      </section>

      <h1 className="text-xl font-medium text-center pt-[30px] pb-[40px]">
        Contact Us
      </h1>

      <div className=" gap-y-4 pb-[40px] md:pb-[40px] md:flex flex-row gap-x-4">
        <section className=" flex flex-col items-center justify-center py-8 px-4 bg-[#F3F5F7] flex-1  ">
          <Home className=" " size={28} strokeWidth={2.25} />

          <h3 className="text-base font-bold text-[#6C7275] pt-4">Address</h3>
          <h3 className=" font-senibold text-base">
            234 Hai Trieu, Ho Chi Minh City,{" "}
          </h3>
          <h3 className=" font-senibold text-base">Viet Nam</h3>
        </section>

        <section className=" flex flex-col items-center justify-center py-8 px-4 bg-[#F3F5F7] flex-1  ">
          <Phone size={28} strokeWidth={2.25} className=" " />

          <h3 className="text-base font-bold text-[#6C7275] pt-4">
            Contact Us
          </h3>
          <h3 className=" font-senibold text-base">+84 234 567 890</h3>
        </section>

        <section className=" flex flex-col items-center justify-center py-8 px-4 bg-[#F3F5F7] flex-1  ">
          <Mail className=" " size={28} strokeWidth={2.25} />

          <h3 className="text-base font-bold text-[#6C7275] pt-4">Email</h3>
          <h3 className=" font-senibold text-base">hello@3legant.com</h3>
        </section>
      </div>

      <div>
        <div className=" pb-[24px] md:flex md:flex-row-reverse">
          <img src={addpoint} alt="" />
          {/* <MapPin className="" size={28} strokeWidth={1.75} /> */}
        </div>
        <div className="flex flex-col items-stretch">
          <form className="flex flex-col ">
            <h5 className="pb-[12px] text-xs font-bold text-[#6C7275]">
              Full Name
            </h5>
            <input
              type="text"
              placeholder="Your Email"
              name=""
              id=""
              className="border  border-[#6C7275] border-solid rounded-lg px-5 pb-[8px]"
            />
            <h5 className="pb-[12px] pt-[18px] text-xs font-bold text-[#6C7275]">
              Email Address
            </h5>
            <input
              type="text"
              placeholder="Your Email"
              name=""
              id=""
              className="border border-[#6C7275] border-solid rounded-lg px-5 pb-[8px]"
            />
            <h5 className="pb-[12px] pt-[18px] text-xs font-bold  text-[#6C7275]">
              MESSAGE
            </h5>
            <input
              type="text"
              placeholder="Your Email"
              name=""
              id=""
              className="border border-[#6C7275] border-solid rounded-lg px-5 h-[110px] pb-[8px]"
            />
            <div className="pt-[20px]">
              <button className="btn bg-black text-white px-5 py-2 rounded-lg  jusmd:text-center ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
