"use client";
import React, { useState, useRef, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import Link from "next/link";
import { AnimationContext } from "./AnimationContext";
import { urlForImage } from "../sanity/lib/image";
export default function Passport({ passportData }) {
  const { language, setLanguage } = useContext(AnimationContext);
  const translations = {
    fr: {
      titre: "OBTENEZ VOTRE CERTIFICAT D’AUTHENTICITÉ",
      text: "Veuillez scanner le QR Code inscrit sur la carte accompagnant votre instrument à l'aide de votre appareil mobile. N’hésitez pas à ",
      contact: "nous contacter",
      suite:'si vous avez la moindre question'
    },
    en: {
      titre: "GET YOUR CERTIFICATE OF AUTHENTICITY",
      text: "Please scan the QR Code on the card that comes with your instrument using your mobile device. Do not hesitate to",
      contact: "contact us",
      suite:'if you have any questions'
    },
    de: {
      titre: "ERHALTEN SIE IHR ECHTHEITSZERTIFIKAT",
      text: "Bitte scannen Sie mit Ihrem Mobilgerät den QR-Code auf der Karte, die Ihrem Instrument beiliegt. Zögern Sie nicht, uns",
      contact: "zu kontaktieren",
      suite:', wenn Sie Fragen haben'
    },
  };
  const overlayDataObj = {};
  for (let i = 0; i < passportData.length; i++) {
    const entry = passportData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  const dialogTriggerRef = useRef(null);

  const handleCertificatButtonClick = () => {
    dialogTriggerRef.current.click();
  };
  return (
    <div className=" md:pt-24 md:pb-48 pt-24">
      <div className="md:custom-grid flex flex-col relative ">
        <div className="md:col-span-5  flex md:block justify-center">
          <Image
            className=" object-cover h-auto md:w-full w-2/3"
            src={urlForImage(passportData[0].image.asset._ref)}
            alt="NFC app picture"
            width={960}
            height={1600}
          />
        </div>
        <div className="md:col-start-7 md:col-end-12 flex flex-col justify-between">
          <div>
            <h2 className="md:text-48px text-21px text-center md:text-left text-soft-black-text md:pb-16 md:pt-3 pt-16 pb-16">
              {overlayDataObj[language]?.titre}
            </h2>
            <p className="md:text-18px text-18px-mobile text-justify md:px-0 px-6 text-soft-black-text">
              {overlayDataObj[language]?.text}
            </p>
          </div>

          <div
            
            className="relative overflow-hidden bg-bronze border border-bronze   2xl:w-2/3 xl:w-5/6 md:w-full md:hover:bg-white md:transition-all group w-auto md:ml-0 mx-6 md:h-auto text-14px-cta md:my-0 my-20 "
          >
            <p    onClick={handleCertificatButtonClick} className=" text-center md:text-15px text-soft-white uppercase  md:p-8  py-8 px-4  md:group-hover:hover-translated-p transition-all">
              {overlayDataObj[language]?.buttonCertificat}
            </p>
            <p    onClick={handleCertificatButtonClick} className=" text-center md:text-15px md:w-full md:text-bronze uppercase md:p-8 hidden md:block  md:cursor-pointer md:absolute md:not-hovered-p md:group-hover:hover-translated-p">
              {overlayDataObj[language]?.buttonCertificat}
            </p>

          </div>
        </div>
      </div>
      <Dialog>
        <DialogTrigger ref={dialogTriggerRef}></DialogTrigger>
        <DialogContent className='bg-white pb-12 pt-8 px-8 max-w-6xl md:mx-0'>
          <DialogHeader>
            <DialogTitle className=" text-center md:text-27px text-2xl text-soft-black uppercase  md:p-2  py-4 px-4  ">      {translations[language]?.titre}</DialogTitle>
            <DialogDescription className='md:text-18px text-18px-mobile text-center pt-8'>

 {translations[language]?.text} <a className="underline cursor-pointer" href="mailto:elias.bouallagui@buffetcrampon.com "> {translations[language]?.contact}</a>  {translations[language]?.suite}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
