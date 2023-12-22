"use client";
import Image from "next/image";
import LoadScreen from "@/app/components/LoadScreen";
import Profile from "@/public/img/TimeProfile.png";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Circle from "./components/Circle/Circle";
import HomeStepOne from "./components/Home/HomeStepOne";
//* TEXT
import LogoText from "./components/Text/Home/Logo";
import HomeStepTwo from "./components/Home/HomeStepTwo";
import HomeStepFour from "./components/Home/HomeStepFour";
import HomeStepThree from "./components/Home/HomeStepThree";
import HomeStepFive from "./components/Home/HomeStepFive";
import Footer from "./components/Footer";

export default function Home() {
  const [showComponents, setShowComponents] = useState(true);
  console.log("ss", showComponents);

  useEffect(() => {
    (() => {
      setInterval(() => {
        setShowComponents(false);
      }, 5000);
    })();
  }, []);
  return (
    <>
      <main className=" h-full w-full">
        {showComponents ? (
          <LoadScreen />
        ) : (
          <>
            <HomeStepOne />
            {/*  <HomeStepTwo />
            <HomeStepThree />
            <HomeStepFour />
            <HomeStepFive /> */}
            <Footer />
          </>
        )}
        {/*  <div>
          <Circle />
        </div> */}
      </main>
    </>
  );
}
