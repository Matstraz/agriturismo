import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../utilities/i18n";
import logo from "../../assets/logo.png";
import italian from "../../assets/italy_flag.png";
import english from "../../assets/UK_flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import styles from "../utilities/Animations";
import { css } from "aphrodite";

const contactIcon = (
  <FontAwesomeIcon
    icon={faComments}
    className={`${css(styles.tada)} text-slate-200 `}
  />
);

export default function MainNavbar() {
  const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.alt);
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-1 mx-auto w-full px-5 flex justify-between text-slate-100 bg-slate-500">
      <div className="flex justify-items-center items-center">
        <img src={logo} alt="logo" width={200} height={200} />
      </div>
      <div className="flex items-center justify-center relative w-full">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <a href="/" title="Home" className=" hover:text-slate-900">
              {t("homepage.navbar.home")}
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              title="gallery"
              className=" hover:text-slate-900"
            >
              {t("homepage.navbar.gallery")}
            </a>
          </li>
          <li>
            <a href="/about" title="about" className=" hover:text-slate-900">
              {t("homepage.navbar.aboutUs")}
            </a>
          </li>
          <li>
            <div>
              <a
                href="/contact"
                title="contactUs"
                className=" hover:text-slate-900 mr-1"
              >
                {t("homepage.navbar.contactUs")}
              </a>
              {contactIcon}
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={italian}
          alt="it"
          className="h-9 mr-3 cursor-pointer"
          onClick={handleLanguage}
        />
        <img
          src={english}
          alt="en"
          className="h-9 mr-3 cursor-pointer"
          onClick={handleLanguage}
        />
      </div>
      <div className="ml-3 lg:hidden z-10">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-3 right-3 w-auto">
            <div className="p-5 bg-gradient-to-t from-slate-700 to-slate-400 w-full border-2 border-slate-100">
              <div className="flex items-center justify-between mb-4 border-b-2 border-slate-100">
                <img src={logo} alt="logo" width={120} height={120} />

                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 mt-2 ml-3 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4 text-slate-100">
                  <li>
                    <a
                      href="/"
                      title="Home"
                      className=" hover:text-slate-900 border-b-2 border-slate-100"
                    >
                      {t("homepage.navbar.home")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      title="gallery"
                      className=" hover:text-slate-900 border-b-2 border-slate-100"
                    >
                      {t("homepage.navbar.gallery")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      title="about"
                      className=" hover:text-slate-900 border-b-2 border-slate-100"
                    >
                      {t("homepage.navbar.aboutUs")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      title="contactUs"
                      className=" hover:text-slate-900 border-b-2 border-slate-100"
                    >
                      {t("homepage.navbar.contactUs")}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
