import ImageGallery from "react-image-gallery";
import photo1 from "../../assets/cavallo1.jpg";
import photo2 from "../../assets/cavallo2.jpg";
import photo3 from "../../assets/cavallo3.jpg";
import { useTranslation } from "react-i18next";
import MainNavbar from "../homepage/MainNavabar";

export default function Gallery() {
  const { t } = useTranslation();

  const images = [
    {
      original: `${photo1}`,
      thumbnail: `${photo1}`,
      thumbnailClass: "pb-0",

      description: `${t("gallery.pic1Description")}`,
    },
    {
      original: `${photo2}`,
      thumbnail: `${photo2}`,
      thumbnailClass: "pb-0",

      description: `${t("gallery.pic2Description")}`,
    },
    {
      original: `${photo3}`,
      thumbnail: `${photo3}`,
      thumbnailClass: "pb-0",

      description: `${t("gallery.pic3Description")}`,
    },
  ];

  return (
    <div className="bg-gradient-to-t from-slate-700 to-slate-400 text-slate-100">
      <MainNavbar />
      <div className="mt-5 border-2 border-white p-5 m-2">
        <ImageGallery items={images} />
      </div>
      <div>FOOTER</div>
    </div>
  );
}
