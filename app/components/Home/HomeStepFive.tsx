import React from "react";
import styled from "styled-components";
//img
import vscode from "@/public/img/vscode.webp";
import ts from "@/public/img/ts.png";
import git from "@/public/img/git.png";
import react from "@/public/img/react.png";
import Image from "next/image";

function HomeStepFive() {
  return (
    <>
      <Container className="w-full h-full">
        <div className="flex flex-col justify-around text-center m-auto h-full p-5 ">
          <div className="text-[32px] font-semibold mt-[24px] mb-[24px]">
            Skiils
          </div>
          <div className="text-[32px] font-semibold mt-[24px] mb-[24px]">
            Front End
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
            <Skills>React.js</Skills> <Skills>TypeScript</Skills>
            <Skills>Javascript</Skills> <Skills>Tailwind</Skills>
            <Skills>Next js</Skills>
          </div>
          <div className="text-[32px] font-semibold mt-[24px] mb-[24px]">
            Black End
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
            <Skills>.NET </Skills> <Skills>C#</Skills>
            <Skills>PostgresSQL</Skills> <Skills>SQL</Skills>
          </div>
          <div className="text-[32px] font-semibold mt-[24px] mb-[24px]">
            Other
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
            <Skills>Kafka </Skills> <Skills>NodeJs</Skills>
            <Skills>Postman</Skills> <Skills>Git</Skills>
            <Skills>Web Responsive</Skills>
          </div>
          <div className="flex justify-around mt-[42px]">
            <Image
              src={vscode}
              alt=""
              className="w-auto h-[100px] ease-in-out duration-700 hover:h-[150px]"
            />
            <Image
              src={react}
              alt=""
              className="w-auto h-[100px] ease-in-out duration-700 hover:h-[150px]"
            />
            <Image
              src={git}
              alt=""
              className="w-auto h-[100px] ease-in-out duration-700 hover:h-[150px]"
            />
            <Image
              src={ts}
              alt=""
              className="w-auto h-[100px] ease-in-out duration-700 hover:h-[150px]"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

const Skills = styled.div`
  width: auto;
  height: 40px;
  border-radius: 8px;
  background-color: #7843e9;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fff;
    color: #7843e9;
    border-radius: 8px;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: "montserrat";
  background-image: linear-gradient(
    90deg,
    rgba(18, 16, 0, 1) 5%,
    rgba(43, 65, 98, 1) 100%
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
export default HomeStepFive;
