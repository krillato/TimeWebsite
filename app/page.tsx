"use client";
import { useEffect, useState } from "react";

import HomeStepOne from "./components/Home/HomeStepOne";
//* TEXT
import Footer from "./components/Footer";
import LoadScreen from "./components/LoadScreen";

export default function Home() {
  const [showComponents, setShowComponents] = useState(true);
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

            <Footer />
          </>
        )}
      </main>
    </>
  );
}
