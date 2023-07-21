"use client";
import React, {
useRef,
  useContext,

} from "react";
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
import { urlForImage } from "@/sanity/lib/image";
import { AnimationContext } from "./AnimationContext";

export default function Avantages({ avantagesData }) {
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
  for (let i = 0; i < avantagesData.length; i++) {
    const entry = avantagesData[i];
    overlayDataObj[entry.__i18n_lang] = entry;
  }
  const dialogTriggerRef = useRef(null);

  const handleCertificatButtonClick = () => {
    dialogTriggerRef.current.click();
  };

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
        <div
            target="_blank"
            href={overlayDataObj[language]?.buttonUrl}
            className="relative overflow-hidden bg-bronze border border-bronze   md:w-auto md:hover:bg-white md:transition-all group md:ml-0  md:h-auto text-14px-cta md:my-0 my-20 w-full md:mr-0 mr-6"
          >
            <p onClick={handleCertificatButtonClick} className=" text-center md:text-15px text-soft-white uppercase  md:p-8  py-8 px-4  md:group-hover:hover-translated-p transition-all">
              {overlayDataObj[language]?.buttonCertificat}
            </p>
            <p onClick={handleCertificatButtonClick} className=" text-center md:text-15px md:w-full md:text-bronze uppercase md:p-8 hidden md:block  md:cursor-pointer md:absolute md:not-hovered-p md:group-hover:hover-translated-p">
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
