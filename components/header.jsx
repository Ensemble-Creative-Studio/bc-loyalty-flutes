"use client";

import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { getHeader } from "../sanity/sanity-util";
import Image from "next/image";
import { AnimationContext } from "./AnimationContext";
import logo from "../public/logo.svg";
import icon from "../public/icon.svg";
import v from "../public/v.svg";
import v2 from "../public/v-2.svg";

export default function Header({}) {
  const [hideHeader, setHideHeader] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const { language, setLanguage } = useContext(AnimationContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 200 && window.innerWidth > 768) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    setShowOverlay(false);
  };

  return (
    <div
      className="header__container h-36 md:h-60 fixed w-full z-30 "
      onMouseEnter={() => setHideHeader(false)}
      onMouseLeave={() => setHideHeader(true)}
    >
      <header
        className="text-10px home flex justify-between items-center h-36 text-white uppercase px-6  w-full top-0  md:text-11px md:px-12 md:h-60"
        style={{
          transform: hideHeader ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.2s ease",
        }}
      >
        <div className="flex-1"></div>
        <div className="logo w-28 h-28 md:h-48 md:w-48 md:flex-1 ">
          <Image
            className="w-full h-full object-contain"
            priority
            src={logo}
            alt="Logo Buffet Crampon"
          />
        </div>

        <div className="icon-langue flex-1 flex justify-end md:relative md:-top-10 cursor-pointer md:flex-1">
          <Image
            className="object-contain w-7 h-7 md:h-9 md:w-9 z-30"
            width={18}
            height={18}
            src={icon}
            alt="Logo Buffet Crampon"
            onClick={() => setShowOverlay(!showOverlay)}
          />
          {showOverlay && (
            <div className="language-overlay absolute bg-black flex flex-col">
              <div className="flex">
                <p
                  onClick={() => handleLanguageChange("en")}
                  className={language === "en" ? "active" : ""}
                  style={{ opacity: language === "en" ? 1 : 0.3 }}
                >
                  English
                </p>
                {language === "en" && (
                  <Image
                    className="w-4 h-4 ml-2 object-contain"
                    priority
                    src={v}
                    alt="Logo Buffet Crampon"
                  />
                )}
              </div>
              <div className="flex">
                <p
                  onClick={() => handleLanguageChange("fr")}
                  className={language === "fr" ? "active" : ""}
                  style={{ opacity: language === "fr" ? 1 : 0.3 }}
                >
                  Français
                </p>
                {language === "fr" && (
                  <Image
                    className="w-4 h-4 ml-2 object-contain"
                    priority
                    src={v}
                    alt="Logo Buffet Crampon"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
