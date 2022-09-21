import MainFooter from "../commonComponents/MainFooter";
import MainNavbar from "../commonComponents/MainNavabar";
import CarouselHome from "./Carousel";
import Hero from "./Hero";

export default function Homepage() {
  return (
    <div className="bg-slate-400">
      <MainNavbar />
      <CarouselHome />
      <Hero />
      <MainFooter />
    </div>
  );
}
