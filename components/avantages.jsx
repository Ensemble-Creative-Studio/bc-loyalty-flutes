"use client";
import React, {

  useContext,

} from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { AnimationContext } from "./AnimationContext";

export default function Avantages({ avantagesData }) {
  const { language, setLanguage } = useContext(AnimationContext);

  const overlayDataObj = {};
  for (let i = 0; i < avantagesData.length; i++) {
    const entry = avantagesData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  return (
    <div className="bg-soft-black md:pt-48 pl-6 md:pl-0">
      <h2 className="md:text-48px text-21px w-10/12 text-light-grey  md:pt-3 md:pl-36 md:pb-36 py-24 ">
        {overlayDataObj[language]?.titre}
      </h2>
      <div className="md:custom-grid flex flex-col relative md:gap-y-0 gap-y-28 ">
      {overlayDataObj[language]?.avantage.map((avantage, index) => (
        <div className="flex flex-col md:col-span-4 md:gap-y-24 gap-y-7" key={index}>
          <div className="md:w-60 md:h-60 w-36 h-36 ">
            <Image
              className="flex-1 h-full w-full object-contain "
              priority
              src={urlForImage(avantage.image.asset._ref)}
              alt="Logo Buffet Crampon"
              width={150}
              height={150}
            />
          </div>
          <p className="text-36px text-soft-grey uppercase 2xl:h-auto md:h-24 font-medium">{avantage.titre}</p>
          <p className="md:text-20px text-18px-mobile text-soft-grey">{avantage.text}</p>
          <p className="md:text-16px text-14px-cta  text-soft-grey">{avantage?.disponibilite}</p>
        </div>
      ))}
      </div>
      <div className="md:h-48 md:flex md:items-center md:justify-center block justify-start ">
        <div className="flex justify-start md:justify-center ">
        <Link
            target="_blank"
            href={overlayDataObj[language]?.buttonUrl}
            className="relative overflow-hidden bg-bronze border border-bronze   md:w-auto md:hover:bg-white md:transition-all group md:ml-0  md:h-auto text-14px-cta md:my-0 my-20 w-full md:mr-0 mr-6"
          >
            <p className=" text-center md:text-15px text-soft-white uppercase  md:p-8  py-8 px-8  md:group-hover:hover-translated-p transition-all">
              {overlayDataObj[language]?.buttonCertificat}
            </p>
            <p className=" text-center md:text-15px md:w-full md:text-bronze uppercase md:p-8 hidden md:block  md:cursor-pointer md:absolute md:not-hovered-p md:group-hover:hover-translated-p">
              {overlayDataObj[language]?.buttonCertificat}
            </p>
          </Link>
    
        </div>
      </div>
    </div>
  );
}
