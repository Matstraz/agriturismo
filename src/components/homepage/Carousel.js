import { Carousel } from "flowbite-react";
import cavallo1 from "../../assets/cavallo1.jpg";
import cavallo2 from "../../assets/cavallo2.jpg";
import cavallo3 from "../../assets/cavallo3.jpg";
import logoBig from "../../assets/logoBig.png";

export default function CarouselHome() {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 relative bg-slate-600">
        <Carousel
          slideInterval={3500}
          indicators={false}
          leftControl=" "
          rightControl=" "
        >
          <img src={cavallo1} className="opacity-60" alt="..." />
          <img src={cavallo2} className="opacity-60" alt="..." />
          <img src={cavallo3} className="opacity-60" alt="..." />
        </Carousel>
        <img
          src={logoBig}
          alt="logoBig"
          className="absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4"
        />
      </div>
    </div>
  );
}
