"use client";
import React, { useState, useRef, useContext } from "react";

import Image from "next/image";
import Link from "next/link";
import arrow from "../public/arrow.svg";
import { AnimationContext } from "./AnimationContext";
import { urlForImage } from "../sanity/lib/image";
export default function Passport({ passportData }) {
  const { language, setLanguage } = useContext(AnimationContext);
  const overlayDataObj = {};
  for (let i = 0; i < passportData.length; i++) {
    const entry = passportData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  return (
    <div className=" md:pt-24 md:pb-48 ">
      <div className="custom-grid relative ">
        <div className="md:col-span-5">
          <Image
            className=" object-cover h-auto w-full"
            src={urlForImage(passportData[0].image.asset._ref)}
            alt="NFC app picture"
            width={960}
            height={1600}
          />
        </div>
        <div className="md:col-start-7 md:col-end-12 flex flex-col justify-between">
          <div>
            <h2 className="md:text-48px text-soft-black-text md:pb-16 md:pt-3">
              {overlayDataObj[language]?.titre}
            </h2>
            <p className="md:text-18px text-soft-black-text">
              {overlayDataObj[language]?.text}
            </p>
          </div>

          <Link
            target="_blank"
            href={overlayDataObj[language]?.buttonUrl}
            className="relative overflow-hidden bg-bronze border border-bronze   2xl:w-2/3 xl:w-5/6 md:w-full md:hover:bg-white md:transition-all group"
          >
            <p className=" text-center md:text-15px text-soft-white uppercase  md:p-8 md:group-hover:hover-translated-p transition-all">
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
