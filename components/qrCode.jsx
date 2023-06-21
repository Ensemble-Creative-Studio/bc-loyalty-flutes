"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { AnimationContext } from "./AnimationContext";

export default function Qrcode({ qrData }) {
  const { language, setLanguage } = useContext(AnimationContext);

  const overlayDataObj = {};
  for (let i = 0; i < qrData.length; i++) {
    const entry = qrData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  return (
    <div className="bg-soft-grey md:pt-24 md:pb-24">
      <div className="custom-grid relative">
        <div className="md:col-span-5 md:flex md:flex-col md:gap-24">
          {overlayDataObj[language]?.code.map((code, index) => (
            <div className="flex flex-col  " key={index}>
              <h4 className="md:text-27px text-soft-black-text md:pb-6">
                {code.titre}
              </h4>
              <p className="md:text-18px text-soft-black-text md:pb-12">
                {code.text}
              </p>
              <div className=" md:flex md:items-center  ">
                <div className="md:flex ">
                  <Link
                    target="_blank"
                    href={code.buttonUrl}
                    className="relative overflow-hidden bg-bronze border border-bronze    md:hover:bg-white md:transition-all group"
                  >
                    <p className=" text-center md:text-12px text-soft-white uppercase  md:py-6 md:px-4 md:group-hover:hover-translated-p transition-all">
                      {code?.buttonCertificat}
                    </p>
                    <p className=" text-center md:text-12px md:text-bronze md:w-full uppercase  md:py-6 md:px-4hidden md:block  md:cursor-pointer md:absolute md:not-hovered-p md:group-hover:hover-translated-p">
                      {code?.buttonCertificat}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-start-7 md:col-end-12 md:flex md:flex-col md:gap-12 md:justify-start">
          <h4 className="md:text-27px text-soft-black-text md:pb-6">
            {overlayDataObj[language]?.titreCarte}
          </h4>
          <div className="w-2/3">
            <Image
              className="flex-1 h-full w-full object-contain "
              priority
              src={urlForImage(qrData[0].image.asset._ref)}
              alt="Carte"
              width={300}
              height={200}
            />
          </div>
          <div>
            {overlayDataObj[language]?.avantageCarte.map(
              (avantageCarte, index) => (
                <p className="md:text-18px text-soft-black-text " key={index}>
                  {avantageCarte.titre}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
