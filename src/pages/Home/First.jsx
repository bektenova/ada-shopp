import HeroImg2 from "../../assets/Paste image (2).png";
import HeroImg3 from "../../assets/Paste image (3).png";
import HeroImg4 from "../../assets/Paste Image (4).png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../../components/Header/Header";

function First() {
  return (
    <div className="  container mx-auto px-8">
      <Header />
      {/* TODO:ИСПРАВИТЬ МАКС ВЫСОТУ */}
      <Carousel showThumbs={false} showStatus={false}>
        <img src={HeroImg2} alt="" className="h-full" />
        <img src={HeroImg3} alt="" className="h-full" />
        <img src={HeroImg4} alt="" className="h-full" />
      </Carousel>
    </div>
  );
}

export default First;
