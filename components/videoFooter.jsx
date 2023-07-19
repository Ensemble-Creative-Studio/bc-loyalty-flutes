"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { AnimationContext } from "./AnimationContext";
export default function videoFooter({ heroData }) {
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
          className="object-cover w-full h-full absolute top-0 left-0  videoHero scaled object-bottom"
          src={overlayDataObj[language]?.url}
          controls
          poster=    {urlForImage(heroData[0].image.asset._ref)}
        />
        <div className="md:col-span-8 col-span-11 flex items-end md:pb-36 pb-12">
   
        </div>

      </div>
    </div>
  );
}
