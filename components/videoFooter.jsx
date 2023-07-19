"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { AnimationContext } from "./AnimationContext";
export default function VideoFooter({ heroData }) {
  const { language, setLanguage } = useContext(AnimationContext);

  const overlayDataObj = {};
  for (let i = 0; i < heroData.length; i++) {
    const entry = heroData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  return (
    <div className="w-full md:h-80vh h-full  ">
      <div className="md:custom-grid block relative">
        <video
          className="md:object-cover object-contain w-full h-full md:absolute relative  top-0 left-0  videoHero scaled object-bottom"
          src={overlayDataObj[language]?.url}
          controls
          poster=    {urlForImage(heroData[0].image.asset._ref)}
        />
    

      </div>
    </div>
  );
}
