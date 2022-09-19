import { Carousel } from "flowbite-react";
import cavallo1 from "../../assets/cavallo1.jpg";
import cavallo2 from "../../assets/cavallo2.jpg";
import cavallo3 from "../../assets/cavallo3.jpg";

export default function CarouselHome() {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 opacity-60 relative">
        <Carousel slideInterval={3500}>
          <img src={cavallo1} alt="..." />
          <img src={cavallo2} alt="..." />
          <img src={cavallo3} alt="..." />
        </Carousel>
      </div>
    </div>
  );
}
