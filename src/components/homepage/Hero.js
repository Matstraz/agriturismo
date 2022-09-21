import imgHero1 from "../../assets/imgHero1.jpg";
import { css } from "aphrodite";
import styles from "../utilities/Animations";
import { useTranslation } from "react-i18next";

/*
import { useRef } from "react";
import styles from "../utilities/Animations";
import { Waypoint } from "react-waypoint"; */
export default function Hero() {
  /*  const _ref = useRef(); // ANIMATION WHEN AN ELEMENT IS REACHED
 function enterAnimation() {
  _ref.current.classList.add(`${css(styles.tada)}`);
  }

  <Waypoint onEnter={enterAnimation} />
  <p ref={_ref}>animated</p>
  My Hero HERE */

  const { t } = useTranslation();

  const myBody = [
    {
      id: 1,
      title: `${t("homepage.hero.title1")}`,
      text: `${t("homepage.hero.text1")}`,
      pic: imgHero1,
    },
    {
      id: 2,
      title: `${t("homepage.hero.title2")}`,
      text: `${t("homepage.hero.text2")}`,
      pic: imgHero1,
    },
    {
      id: 3,
      title: `${t("homepage.hero.title3")}`,
      text: `${t("homepage.hero.text3")}`,
      pic: imgHero1,
    },
    {
      id: 4,
      title: `${t("homepage.hero.title4")}`,
      text: `${t("homepage.hero.text4")}`,
      pic: imgHero1,
    },
    {
      id: 5,
      title: `${t("homepage.hero.title5")}`,
      text: `${t("homepage.hero.text5")}`,
      pic: imgHero1,
    },
  ];
  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-400 w-full text-slate-100 pb-12">
      {myBody.map((row) => (
        <div
          key={row.id}
          className={
            row.id % 2
              ? `${css(
                  styles.fadeInUp
                )} text-slate-200 flex justify-center items-center overflow-hidden mt-10 md:mt-12 lg:mt-14 mx-2 mb-2 p-4 lg:p-5 md:mx-10 lg:mx-20 border-x-4 border-y lg:rounded-tl-full lg:rounded-br-full rounded-tl-3xl rounded-br-3xl lg:border-stone-500 lg:h-75`
              : `${css(
                  styles.fadeInUp
                )} text-slate-200 flex flex-row-reverse justify-center items-center overflow-hidden mt-10 md:mt-12 lg:mt-14 mx-2 mb-2 p-4 lg:p-5 lg:pb-8 md:mx-10 lg:mx-20 border-x-4 border-y lg:rounded-tl-full lg:rounded-br-full rounded-tl-3xl rounded-br-3xl lg:border-stone-500 lg:h-75`
          }
        >
          <div
            className={
              row.id % 2
                ? "hidden lg:flex justify-center items-center md:ml-2 lg:ml-16 rounded-full lg:border-4 lg:border-stone-500 bgImg1 lg:h-48 lg:w-48"
                : "hidden lg:flex justify-center items-center mr-2 lg:mr-16 rounded-full lg:border-4 lg:border-stone-500 bgImg1 lg:h-48 lg:w-48"
            }
          ></div>
          <div
            className={
              row.id % 2
                ? "flex flex-col justify-center lg:w-8/12 pr-18 lg:pr-20"
                : "flex flex-col justify-center lg:w-8/12 pl-18 lg:pl-20"
            }
          >
            <h1
              className={
                row.id % 2
                  ? "px-2 md:px-5 md:ml-5 text-2xl font-bold text-black uppercase text-center lg:text-left"
                  : "md:px-5 md:ml-8 text-2xl font-bold text-black uppercase text-center lg:text-left"
              }
            >
              {row.title}
            </h1>
            <p
              className={
                row.id % 2
                  ? "p-5 lg:mr-8 lg:ml-5 text-justify text-slate-200"
                  : "p-5 lg:ml-8 lg:mr-5 text-justify text-slate-200"
              }
            >
              {row.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
