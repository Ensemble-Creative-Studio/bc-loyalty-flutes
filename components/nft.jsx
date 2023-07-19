"use client";
import React, { useContext } from "react";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import { AnimationContext } from "./AnimationContext";

export default function Nft({ nftData }) {
  const { language, setLanguage } = useContext(AnimationContext);

  const overlayDataObj = {};
  for (let i = 0; i < nftData.length; i++) {
    const entry = nftData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  return (
    <div className="md:pt-48 md:pb-32 pt-20 px-6 md:px-0">
        <p className="md:text-63px text-27px-narrow font-medium  text-soft-black uppercase md:pl-36 md:pb-8 pb-2 md:w-4/5" >{overlayDataObj[language]?.titre}</p>
        <h4 className="md:text-27px text-17px text-soft-black-text md:pl-36 md:pb-16 pb-6 ">{overlayDataObj[language]?.text}</h4>
      <div className="md:custom-grid flex flex-col relative nft md:pt-12 pt-12" >
        {overlayDataObj[language]?.etapes.map((etape, index) => (
        <div className="flex flex-col md:col-span-4 grid-item " key={index}>
          <div className=" ">
            <Image
              className="flex-1 h-full w-full object-contain "
              priority
              src={urlForImage(etape.image.asset._ref)}
              alt="Logo Buffet Crampon"
              width={1500}
              height={1500}
            />
          </div>
 
          <p className="md:text-20px-bold-narrow text-16px-mobile text-soft-black-text uppercase 2xl:h-auto md:h-24 md:pt-12 pt-6 md:pb-0 pb-24 " >{etape.titre}</p>
         
        </div>
        
      ))}
        </div>

    </div>
  );
}
