"use client";

import { useState, useEffect, useRef, useContext } from "react";

import { AnimationContext } from "./AnimationContext";
export default function Hero({ heroData }) {
  const { language, setLanguage } = useContext(AnimationContext);

  const overlayDataObj = {};
  for (let i = 0; i < heroData.length; i++) {
    const entry = heroData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  return (
    <div className="w-full h-80vh ">
      <div className="md:custom-grid custom-grid-mobile relative">
        <video
          className="object-cover w-full h-full absolute top-0 left-0 -z-10 videoHero scaled object-bottom"
          src={overlayDataObj[language]?.url}
          muted
          playsInline
          autoPlay
          loop
        />
        <div className="md:col-span-12 col-span-11 flex items-end md:pb-36 pb-12">
        <h1 className="md:text-92px text-41x text-soft-white max-widthch"
        >{overlayDataObj[language]?.herotext}</h1>
        </div>

      </div>
    </div>
  );
}
