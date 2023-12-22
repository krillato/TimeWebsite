import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Typical from "react-typical";
//img
import PicOne from "@/public/img/1.png";
import PicTwo from "@/public/img/5.png";
import PicThree from "@/public/img/2.png";
function HomeStepTwo() {
  return (
    <Container className="h-full w-full items-center flex">
      <div className=" flex-cols justify-center w-full ">
        <div className="flex justify-center items-center p-5 pt-10">
          <span className="w-[220px] ml-10">ABOUT ME {"<--"} </span>
          <div className="w-full mr-10 border-t-[1px] opacity-50" />
        </div>
        <div className="text-[50px] pt-20 text-center">
          I m TAMMARAT CHANSAMORN
        </div>

        <div className="m-auto items-center mt-10 flex justify-center text-[28px] text-left">
          You can call me Time. I m Software developer. can work from design{" "}
          <br />
          Hands-on coding, debugging, development, and testing. Ready to learn
          new <br />
          languages, tools all the time.
        </div>

        <div className="flex justify-between p-10 pt-20">
          <Image src={PicOne} alt="one" className="h-[200px] w-auto" />
          <Image src={PicTwo} alt="one" className="h-[200px] w-auto" />
          <Image src={PicThree} alt="one" className="h-[200px] w-auto" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: "montserrat";
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(37, 35, 77, 1) 29%,
    rgba(52, 21, 73, 1) 66%,
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
`;
export default HomeStepTwo;
