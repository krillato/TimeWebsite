"use client";
import Script from "next/script";
import "./Logo.css";
import React from "react";

function LogoText(): React.JSX.Element {
  return (
    <>
      <Script id="show-banner">
        {`const spans = document.querySelectorAll(".word span");
          spans.forEach((span, idx) => {
            span.addEventListener("click", (e) => {
              e.target.classList.add("active");
            });
            span.addEventListener("animationend", (e) => {
              e.target.classList.remove("active");
            });

            // Initial animation
            setTimeout(() => {
              span.classList.add("active");
            }, 750 * (idx + 1));
          });
          `}
      </Script>
      <div className="word">
        <span>T</span>
        <span>I</span>
        <span>M</span>
        <span>E</span>
      </div>
      <footer>
        <p className="flex justify-center">
          Portfolio <i className="fa fa-heart"></i>By {"   "}
          <p className="text-[#3C97BF] ml-2"> Time</p>
        </p>
      </footer>
    </>
  );
}

export default LogoText;
