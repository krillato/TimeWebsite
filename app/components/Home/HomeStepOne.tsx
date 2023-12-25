import React, { useState } from "react";
// @ts-ignore
import VideoPlayer from "react-background-video-player";
import "./HomeStepOne.css";
import styled from "styled-components";
//* TEXT
import LogoText from "../Text/Home/Logo";
import Drawer from "@mui/material/Drawer";
import nunew from "@/public/img/nunew.png";
import Image from "next/image";
import Link from "next/link";
import CMU from "@/videos/cmu.mp4";

const HomeStepOne = (): React.JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleClick = () => setDrawerOpen(!drawerOpen);
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <main className="overflow-hidden w-full h-full">
      {/*   <VideoPlayer
        className="video opacity-50 w-full h-full  "
        src={
          "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
        }
        autoPlay={true}
        muted={true}
      /> */}
      <div>
        <video
          src={
            "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
          }
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute opacity-50  border object-cover w-full h-full  "
        />
      </div>

      <div id="StepOne" className=" w-full h-full  bg-[#636363] p-5">
        <nav className="flex-cols justify-between ">
          <div className="flex justify-between">
            <div>
              <LogoText />
            </div>{" "}
            <div
              onClick={() => {
                handleClick();
              }}
              className="cursor-pointer lg:hidden w-[50px] flex justify-center items-center  h-[50px] bg-[#45c3a5] rounded-full z-[9999] hover:bg-slate-600 transition duration-700 ease-in-out"
            >
              <div className=" w-[30px] h-[30px] hover:w-[45px] hover:h-[45px] transition duration-700 ease-in-out ">
                {icon_menu}
              </div>
            </div>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                className="p-5"
              >
                <p>Tammarat Chansamorn</p>
                <div className="flex gap-4 justify-center w-[50%]">
                  <ul className="">
                    <li className="cursor-pointer hover:bg-[#b271de] hover:text-white transition duration-700 ease-in-out hover:rounded-xl  hover:p-2">
                      <a href="#">About</a>
                    </li>
                    <li className="cursor-pointer hover:bg-[#b271de] hover:text-white transition duration-700 ease-in-out hover:rounded-xl  hover:p-2">
                      <Link href="/file/Tammarat_Chansamorn.pdf" locale={false}>
                        Resume
                      </Link>
                    </li>
                    <li className="cursor-pointer hover:bg-[#b271de] hover:text-white transition duration-700 ease-in-out hover:rounded-xl  hover:p-2">
                      <a href="#">Contact</a>
                    </li>
                    <li className="cursor-pointer hover:bg-[#b271de] hover:text-white transition duration-700 ease-in-out hover:rounded-xl  hover:p-2">
                      <Link
                        href={"https://github.com/krillato"}
                        target="_blank"
                      >
                        Work
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Drawer>
            <div className="hidden lg:opacity-1 lg:flex gap-5 z-[9999]">
              <ul className="nav">
                <li className="cursor-pointer">
                  <a href="#">About</a>
                </li>
                <li className="cursor-pointer">
                  <Link href="/file/Tammarat_Chansamorn.pdf" locale={false}>
                    Resume
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Contact</a>
                </li>
                <li className="cursor-pointer">
                  <Link href={"https://github.com/krillato"} target="_blank">
                    Work
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center p-5">
            <div className="w-auto">
              <span className="w-[250px]">WEB & Tammarat</span>
              <br />
              <span className="text-[12px]">
                The person in the picture is not me.
              </span>
            </div>

            <div className="w-full mr-2 border-t-[1px] opacity-50" />
          </div>
        </nav>

        <div className="flex h-full justify-center items-center">
          <div className="absolute w-full p-5   flex justify-between  items-center">
            <div className="w-[10px] ease-in-out duration-700  hover:w-[200px]  bg-[#91868679] rounded-r-[99px] h-[80px] flex  justify-between p-2">
              <span className="text-[14px]  ml-3">
                Located <br /> in the <br /> Bangkok
              </span>
              <div className="bg-[#985858e7] w-[60px] h-[60px] rounded-[99px] text-center items-center justify-center mr-2"></div>
            </div>
            <span>
              Programer <br /> Designer & Developer
            </span>
          </div>
          <Image
            className=" h-full w-auto z-[999] flex justify-end rounded-lg hover:md:w-[70%] hover:md:h-auto transition   duration-1000 ease-in-out "
            src={nunew}
            alt="Next.js Logo"
            priority
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};
const Footer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(transparent, #141612);
`;
const icon_menu: any = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="auto"
    height="auto"
    viewBox="0,0,256,256"
  >
    <g
      fill="none"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeDasharray=""
      strokeDashoffset="0"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
    >
      <g transform="scale(5.33333,5.33333)">
        <path
          d="M25.457,7.504c-6.171,-0.17 -11.438,0.347 -17.579,0.978c-0.611,0.063 -1.244,0.136 -1.77,0.453c-1.354,0.815 -1.381,2.156 -1.244,3.731c0.045,0.522 0.163,1.146 0.65,1.338c0.135,0.053 0.283,0.064 0.429,0.074c11.101,0.736 23.465,0.383 34.557,-0.468c1.366,-0.105 1.708,-0.247 2.437,-1.407c0.825,-1.312 0.618,-3.068 -0.707,-3.871c-1.326,-0.802 -1.721,-0.872 -3.271,-0.875c-4.186,-0.007 -9.318,0.163 -13.502,0.047z"
          fill="#87caa2"
        ></path>
        <path
          d="M18.881,14.979c-4.255,0 -8.643,-0.115 -12.972,-0.402c-0.152,-0.01 -0.364,-0.022 -0.58,-0.107c-0.84,-0.332 -0.93,-1.369 -0.963,-1.76c-0.138,-1.591 -0.137,-3.227 1.484,-4.202c0.639,-0.385 1.381,-0.461 1.977,-0.521c5.787,-0.595 11.256,-1.161 17.644,-0.981v0c2.587,0.072 5.549,0.032 8.412,-0.006c1.76,-0.023 3.487,-0.043 5.076,-0.042c1.623,0.004 2.104,0.086 3.528,0.947c0.684,0.414 1.163,1.076 1.35,1.865c0.212,0.896 0.038,1.879 -0.478,2.7c-0.83,1.318 -1.318,1.523 -2.822,1.639c-5.797,0.445 -13.478,0.87 -21.656,0.87zM23.075,7.972c-5.341,0 -10.122,0.492 -15.146,1.009c-0.632,0.065 -1.148,0.134 -1.563,0.383c-1.034,0.622 -1.149,1.586 -1.004,3.26c0.046,0.538 0.159,0.847 0.335,0.916c0.067,0.026 0.183,0.033 0.275,0.039c12.594,0.833 25.706,0.207 34.489,-0.467c1.224,-0.094 1.417,-0.165 2.051,-1.175c0.374,-0.595 0.502,-1.301 0.352,-1.936c-0.088,-0.373 -0.315,-0.891 -0.895,-1.241c-1.239,-0.749 -1.533,-0.799 -3.013,-0.803c-1.585,-0.004 -3.305,0.02 -5.06,0.043c-2.874,0.038 -5.845,0.077 -8.453,0.005v0c-0.803,-0.023 -1.591,-0.033 -2.368,-0.033z"
          fill="#010101"
        ></path>
        <path
          d="M24.805,21.407c-5.722,0.191 -11.388,0.051 -17.111,0.228c-1.011,0.031 -2.189,0.153 -2.727,1.009c-0.53,0.844 -0.354,2.297 -0.215,3.315c0.124,0.906 0.713,1.324 1.623,1.415c1.055,0.106 2.48,0.064 3.542,0.083c9.226,0.17 19.083,-0.229 28.12,-0.008c1.239,0.03 2.573,-0.209 3.492,-1.04c0.753,-0.681 1.083,-1.731 1.122,-2.746c0.033,-0.861 -0.162,-1.803 -0.827,-2.351c-0.651,-0.537 -1.571,-0.559 -2.415,-0.554c-5.058,0.03 -9.548,0.481 -14.604,0.649z"
          fill="#87caa2"
        ></path>
        <path
          d="M15.117,28.002c-1.754,0 -3.497,-0.013 -5.209,-0.044c-1.052,-0.021 -2.492,0.023 -3.582,-0.086c-1.521,-0.151 -1.965,-1.087 -2.069,-1.845c-0.173,-1.268 -0.308,-2.7 0.288,-3.648c0.735,-1.17 2.356,-1.22 3.135,-1.244c2.804,-0.086 5.637,-0.097 8.376,-0.107c2.859,-0.011 5.815,-0.022 8.733,-0.12v0c2.062,-0.068 4.057,-0.187 5.986,-0.3c2.768,-0.163 5.63,-0.331 8.632,-0.349c0.767,0 1.911,-0.011 2.735,0.669c0.697,0.572 1.055,1.552 1.008,2.756c-0.05,1.293 -0.507,2.393 -1.286,3.098c-1.124,1.017 -2.714,1.195 -3.84,1.169c-4.692,-0.114 -9.705,-0.061 -14.55,-0.009c-2.756,0.03 -5.57,0.06 -8.357,0.06zM24.822,21.907c-2.933,0.098 -5.897,0.109 -8.763,0.12c-2.733,0.011 -5.56,0.021 -8.349,0.107c-0.97,0.029 -1.923,0.145 -2.319,0.775c-0.452,0.721 -0.251,2.191 -0.143,2.982c0.06,0.435 0.246,0.892 1.177,0.985c1.035,0.104 2.465,0.062 3.501,0.08c4.418,0.082 9.054,0.032 13.538,-0.017c4.855,-0.052 9.875,-0.105 14.585,0.009c0.95,0.026 2.266,-0.116 3.145,-0.911c0.78,-0.705 0.935,-1.803 0.958,-2.395c0.02,-0.512 -0.038,-1.445 -0.645,-1.945c-0.504,-0.414 -1.284,-0.442 -2.094,-0.44c-2.976,0.018 -5.698,0.178 -8.58,0.347c-1.935,0.116 -3.937,0.234 -6.011,0.303z"
          fill="#010101"
        ></path>
        <path
          d="M23.814,33.916c-5.881,0.053 -11.022,-0.458 -16.907,-0.229c-0.386,0.015 -0.795,0.112 -1.069,0.385c-0.377,0.376 -0.343,0.985 -0.283,1.514l0.133,1.173c0.114,1.008 1.017,2.776 2.032,2.782c8.718,0.05 16.994,0.025 25.712,-0.074c1.72,-0.02 3.444,-0.042 5.154,-0.226c1.07,-0.115 2.134,-0.292 3.184,-0.532c0.394,-0.09 0.813,-0.205 1.074,-0.513c0.214,-0.254 0.285,-0.597 0.33,-0.926c0.08,-0.579 0.105,-1.165 0.077,-1.748c-0.05,-1.034 -0.899,-1.865 -1.933,-1.895c-5.891,-0.172 -11.563,0.236 -17.504,0.289z"
          fill="#87caa2"
        ></path>
        <path
          d="M16.402,40.067c-2.868,0 -5.748,-0.008 -8.687,-0.025c-1.398,-0.008 -2.402,-2.136 -2.525,-3.226l-0.133,-1.173c-0.053,-0.471 -0.152,-1.347 0.427,-1.926c0.326,-0.324 0.811,-0.508 1.403,-0.53c3.345,-0.128 6.51,-0.021 9.571,0.085c2.362,0.082 4.802,0.169 7.351,0.144v0c2.266,-0.021 4.527,-0.093 6.714,-0.164c3.518,-0.114 7.154,-0.23 10.808,-0.124c1.293,0.038 2.355,1.079 2.418,2.371c0.03,0.614 0.003,1.233 -0.081,1.841c-0.055,0.405 -0.147,0.83 -0.443,1.18c-0.359,0.425 -0.883,0.572 -1.346,0.678c-1.064,0.243 -2.155,0.425 -3.241,0.542c-1.765,0.189 -3.591,0.21 -5.202,0.229c-5.863,0.066 -11.425,0.098 -17.034,0.098zM10.118,34.127c-1.043,0 -2.101,0.018 -3.192,0.061c-0.332,0.012 -0.593,0.097 -0.736,0.239c-0.209,0.208 -0.19,0.653 -0.139,1.103l0.133,1.173c0.106,0.942 0.935,2.335 1.538,2.339c8.681,0.052 16.849,0.027 25.703,-0.074c1.667,-0.019 3.39,-0.038 5.107,-0.223c1.047,-0.113 2.099,-0.289 3.125,-0.522c0.319,-0.073 0.645,-0.16 0.804,-0.349c0.13,-0.154 0.181,-0.413 0.216,-0.67c0.076,-0.547 0.1,-1.104 0.073,-1.656c-0.038,-0.773 -0.674,-1.397 -1.448,-1.42c-3.623,-0.106 -7.244,0.01 -10.747,0.124c-2.192,0.07 -4.459,0.144 -6.737,0.164v0c-2.565,0.028 -5.021,-0.062 -7.394,-0.144c-2.133,-0.074 -4.187,-0.145 -6.306,-0.145z"
          fill="#010101"
        ></path>
      </g>
    </g>
  </svg>
);

export default HomeStepOne;
