"use client";
import React, { useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { AnimationContext } from "./AnimationContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export default function Qrcode({ qrData }) {
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
  for (let i = 0; i < qrData.length; i++) {
    const entry = qrData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }

  const dialogTriggerRef = useRef(null);

  const handleCertificatButtonClick = () => {
    dialogTriggerRef.current.click();
  };
  return (
    <div className="bg-soft-grey md:pt-24 md:pb-24 pt-20">
      <div className="md:custom-grid flex flex-col md:px-0 px-6 relative">
        <div className="md:col-span-5 flex flex-col md:gap-24 gap-24">
        {overlayDataObj[language]?.code.map((code, index) => (
  <div className="flex flex-col" key={index}>
    <h4 className="md:text-27px text-17px text-soft-black-text md:pb-6 pb-4 md:w-4/5">
      {code.titre}
    </h4>
    <p className="md:text-18px text-16px-mobile-normal font-normal text-soft-black-text md:pb-12">
      {code.text}
    </p>
    <div className="flex md:items-center">
      <div className="flex">
        {index === 0 ? (
          <div className="relative overflow-hidden bg-bronze border border-bronze md:w-auto md:hover:bg-white md:transition-all group md:ml-0 md:h-auto text-14px-cta md:my-0 my-10 w-full md:mr-0 mr-6">
            <p onClick={handleCertificatButtonClick}  className="text-center md:text-15px text-soft-white uppercase md:p-8 py-8 px-4 md:group-hover:hover-translated-p transition-all">
              {code?.buttonCertificat}
            </p>
            <p onClick={handleCertificatButtonClick} className="text-center md:text-15px md:w-full md:text-bronze uppercase md:p-8 hidden md:block md:cursor-pointer md:absolute md:not-hovered-p md:group-hover:hover-translated-p">
              {code?.buttonCertificat}
            </p>
          </div>
        ) : (
          <Link
            target="_blank"
            href={code.buttonUrl}
            className="relative overflow-hidden bg-bronze border border-bronze md:w-auto md:hover:bg-white md:transition-all group md:ml-0 md:h-auto text-14px-cta md:my-0 my-10 w-full md:mr-0 mr-6"
          >
            <p className="text-center md:text-15px text-soft-white uppercase md:p-8 py-8 px-4 md:group-hover:hover-translated-p transition-all">
              {code?.buttonCertificat}
            </p>
            <p className="text-center md:text-15px md:w-full md:text-bronze uppercase md:p-8 hidden md:block md:cursor-pointer md:absolute md:not-hovered-p md:group-hover:hover-translated-p">
              {code?.buttonCertificat}
            </p>
          </Link>
        )}
      </div>
    </div>
  </div>
))}

        </div>
        <div className="md:col-start-7 md:col-end-12 md:flex md:flex-col md:gap-12 md:justify-start md:pt-0 pt-24">
          <h4 className="md:text-27px text-17px text-soft-black-text md:pb-6 pb-10 " >
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
          <div className="md:pt-0 pt-10 md:pb-0 pb-20">
            {overlayDataObj[language]?.avantageCarte.map(
              (avantageCarte, index) => (
                <p className="md:text-18px text-18px-mobile text-soft-black-text " key={index}>
                  {avantageCarte.titre}
                </p>
              )
            )}
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
