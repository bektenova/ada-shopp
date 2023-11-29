// import { Star } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Slider({ product }) {
  return (
    <div>
      <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
        {product.images.map((item) => (
          <div className=" overflow-hidden">
            <img src={item} alt="" className="w-full h-full" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
