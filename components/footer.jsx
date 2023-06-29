'use client'
import Link from "next/link";
import React, { useLayoutEffect, useRef, useContext } from "react";
import { AnimationContext } from "./AnimationContext";
export default  function Footer({footerData,pageData}) {
  const { language, setLanguage } = useContext(AnimationContext);
  const overlayDataObj = {};

  for (let i = 0; i < pageData.length; i++) {
    const entry = pageData[i];
    if (!overlayDataObj[entry.__i18n_lang]) {
      overlayDataObj[entry.__i18n_lang] = [];
    }
    overlayDataObj[entry.__i18n_lang].push(entry);
  }
  

  return (
    <div className="bg-soft-black w-full flex flex-col justify-center h-52   md:px-36 md:flex-row-reverse md:justify-between md:items-center md:h-40">
      <div className="page__link flex flex-col justify-center md:flex-row md:gap-20 gap-4">
        {/* Render each page with its name and URL */}
        { overlayDataObj[language]?.map((page) => (
          <div className="text-center  " key={page._id}>
            <Link className="text-mid-grey md:text-15px text-14px-cta  " href={page.slug.current}>
            {page.titre}
            </Link>
          </div>
        ))}
      </div>
      <p className="text-mid-grey md:text-15px text-center text-14px-cta pt-4  md:pt-0">© 2023 Groupe Buffet Crampon</p>
    </div>
  );
}
