// import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroImg2 from "../../assets/Paste image (2).png";
import HeroImg3 from "../../assets/Paste image (3).png";
import HeroImg4 from "../../assets/Paste Image (4).png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Carousel } from "react-responsive-carousel";
import { LockKeyhole, Phone, Truck, Banknote } from "lucide-react";

function Home() {
  return (
    <div className="px-8 max-w-[1440px] mx-auto">
      <div className="lg:px-[160px] sm:h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Carousel showThumbs={false} showStatus={false}>
            <img src={HeroImg2} alt="" className="h-full" />
            <img src={HeroImg3} alt="" className="h-full" />
            <img src={HeroImg4} alt="" className="h-full" />
          </Carousel>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row">
        <h1 className="text-4xl font-medium w-72 text-color">
          Simply Unique/ Simply Better.
        </h1>
        <h1 className="text-sm font-semibold color-[#6C7275] ">
          3legant is a gift & decorations store based in HCMC, Vietnam. Est
          since 2019.
        </h1>
      </div>

      <div className="lg:mx-[160px] flex flex-wrap items-stretch justify-center gap-x-2 gap-y-6">
        <ServiceCard
          Icon={Truck}
          title={"Free Shopping"}
          descrip={"Order above 200$"}
        />
        <ServiceCard
          Icon={Banknote}
          title={"Money-back"}
          descrip={"30 days guarantee"}
        />
        <ServiceCard
          Icon={LockKeyhole}
          title={"Secure Payments"}
          descrip={" Secured by Stripe"}
        />
        <ServiceCard
          Icon={Phone}
          title={"24/7 Support"}
          descrip={" Phone and Email support"}
        />
      </div>
    </div>
  );
}
export default Home;
