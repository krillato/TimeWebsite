"use client";
import Script from "next/script";
import React, { useState } from "react";
import styled from "styled-components";
import { log } from "console";

//img
import ku from "@/public/img/ku.png";
import rajavinit from "@/public/img/rajavinit.png";
import calerm from "@/public/img/calerm.jpg";
import arrow from "@/public/img/arrow-up.png";
import Image from "next/image";

function HomeStepThree() {
  const [isHovering, setIsHovering] = useState(false);
  const [contentNumber, setContentNumber] = useState(0);
  const handleMouseOver = (index: number) => {
    setContentNumber(index);
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div className="bg-[#e1e2b4] h-[150px]" />
      <Container className="w-full h-full">
        <div className="flex flex-col  items-center m-auto justify-center w-full h-full ">
          <div className="text-[50px] text-center ">EDUCATION</div>
          <div className=" w-full  p-10">
            <ul className="flex flex-col gap-10 justify-center m-auto  items-center">
              <li>
                {isHovering && contentNumber === 1 && (
                  <div
                    id="content"
                    className="!text-[#050505] ml-[5%] left-0 w-[300px] h-[220px]  border bg-[#ffffffae] rounded-lg shadow-2xl p-5 "
                  >
                    <h2>🏡 Kasetsart University </h2>
                    <br />
                    <h3>💻 kamphaeng saen campus</h3>
                    <br />
                    <h2>
                      🌟 Computer Science (Second-class honors) June 2018 –
                      April 2022
                    </h2>
                  </div>
                )}
                <button
                  onMouseOver={() => handleMouseOver(1)}
                  onMouseOut={handleMouseOut}
                >
                  <Image src={ku} alt="" />
                </button>
              </li>
              <Image src={arrow} alt="" className="w-[50px]" />
              <li>
                {isHovering && contentNumber === 2 && (
                  <div
                    id="content"
                    className=" mr-[5%] right-0 w-[300px] h-[150px]  border bg-[#ffffffae] rounded-lg shadow-2xl p-5 "
                  >
                    <h2>🏡 Rajavinit nonthaburi School</h2>
                    <br />
                    <h3>💻 Math & Sci</h3>
                  </div>
                )}
                <button
                  onMouseOver={() => handleMouseOver(2)}
                  onMouseOut={handleMouseOut}
                >
                  <Image src={rajavinit} alt="" className="rounded-full" />
                </button>
              </li>
              <Image src={arrow} alt="" className="w-[50px]" />
              <li>
                {" "}
                {isHovering && contentNumber === 3 && (
                  <div
                    id="content"
                    className=" ml-[5%] left-0 w-[300px] h-[150px]  border bg-[#ffffffae] rounded-lg shadow-2xl p-5 "
                  >
                    <h2>
                      โรงเรียนเฉลิมพระเกียรติ ๖๐ พรรษา สมเด็จพระนางเจ้าสิริกิติ์
                      พระบรมราชินีนาถ
                    </h2>
                  </div>
                )}
                <button
                  onMouseOver={() => handleMouseOver(3)}
                  onMouseOut={handleMouseOut}
                >
                  <Image src={calerm} alt="" className="rounded-full w-full" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        ;
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: "montserrat";
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 5%,
    rgba(57, 96, 38, 1) 28%,
    rgba(25, 171, 46, 1) 63%,
    rgba(20, 184, 130, 1) 87%,
    rgba(52, 3, 61, 1) 100%
  );
  background-size: 400%;
  animation: bganimation 30s infinite;

  background-position: 400%;
  animation: bganimation 30s infinite;
  @keyframes bganimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  ul {
    padding: 0;
  }
  li {
    //   display: inline-block;
    //list-style-type: none;
    margin: 0 20px;
    &:nth-child(1) button {
      background: #f3ffbd;
    }
    &:nth-child(2) button {
      background: #247ba0;
    }
    &:nth-child(3) button {
      background: #ff1654;
    }
  }
  button {
    position: relative;
    background: rebeccapurple;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid white;
    transition-duration: 1000ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    color: white;
    font-family: Verdana;
    font-weight: bold;
    font-size: 50px;
    cursor: pointer;
    padding: 0;
  }
  button:hover {
    position: relative;
    background: rebeccapurple;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #59c03d;

    color: white;
    font-family: Verdana;
    font-weight: bold;
    font-size: 50px;
    cursor: pointer;
    padding: 0;
  }

  #content {
    color: #020024;
    position: absolute;
  }
`;
export default HomeStepThree;
