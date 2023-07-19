import "./globals.css";
import Header from "../components/header";
import Hero from "@/components/hero";
import Passport from "@/components/passport";
import Avantages from "@/components/avantages";
import Nft from "@/components/nft";
import Qrcode from "@/components/qrCode";
import Footer from "../components/footer";
import VideoFooter from "@/components/videoFooter";
import { AnimationProvider } from "../components/AnimationContext";
import {
  getHeader,
  getHero,
  getPassport,
  getAvantages,
  getNft,
  getQR,
  getFooter,
  getPage,
  getVideo,
  getOverlay
} from "../sanity/sanity-util";

export default async function Home() {
  const lang = "fr"; // Set lang variable based on browser language, default to "fr" if not available
  const headerData = await getHeader();
  const heroData = await getHero();
  const passportData = await getPassport();
  const avantagesData = await getAvantages();
  const nftData = await getNft();
  const qrData = await getQR();
  const videoData = await getVideo();
  const footerData = await getFooter();
  const pageData = await getPage();
  const overlayData = await getOverlay()
  return (
    <div className="smooth-scroller">
      <AnimationProvider>
        <div className="relative z-20 ">
          <Header />
          <Hero heroData={heroData} />
          <Passport passportData={passportData} overlayData = {overlayData} />
          <Avantages avantagesData={avantagesData} />
          <Nft nftData={nftData} />
          <Qrcode qrData={qrData} />
          <VideoFooter heroData={videoData} />
          <Footer footerData={footerData} pageData={pageData} />
        </div>
      </AnimationProvider>
    </div>
  );
}
