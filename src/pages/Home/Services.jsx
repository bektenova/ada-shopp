import ServiceCard from "../../components/ServiceCard/ServiceCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { LockKeyhole, Phone, Truck, Banknote } from "lucide-react";
function Services() {
  return (
    <div className="  container mx-auto px-8 flex flex-wrap items-stretch justify-center gap-x-2 gap-y-6 pb-[50px]">
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
  );
}

export default Services;
