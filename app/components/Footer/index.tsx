import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/vimeo";
import "react-social-icons/meetup";
import "./index.css";
import Image from "next/image";
//img
import codesandbox from "@/public/img/footer/codesandbox.png";
import facebook from "@/public/img/footer/facebook.png";
import github from "@/public/img/footer/github.png";
import ig from "@/public/img/footer/ig.png";
import linkin from "@/public/img/footer/linkin.png";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full p-5 h-auto bg-black items-center flex flex-col justify-center">
      <div
        className="grid 
      grid-cols-1 sm:grid-cols-3 justify-center  md:grid-cols-5 gap-10"
      >
        <div className="w-[100px] h-[100px] p-1 border rounded-full bg-slate-50  ease-in-out duration-700 hover:h-[150px] flex justify-center items-center">
          <Link href={"https://github.com/krillato"} target="_blank">
            <Image alt="" src={github} className="w-full h-auto " />
          </Link>
        </div>
        <div className="w-[100px] h-[100px] p-1 border rounded-full bg-slate-50 flex   ease-in-out duration-700 hover:h-[150px] justify-center items-center">
          <Link
            href={
              "https://codesandbox.io/dashboard/sandboxes/?workspace=873b8007-54d2-4f38-811e-0a719395ee58"
            }
            target="_blank"
          >
            <Image alt="" src={codesandbox} className="w-full h-auto " />
          </Link>
        </div>
        <div className="w-[100px] h-[100px] p-1 border rounded-full flex bg-slate-50  ease-in-out duration-700 hover:h-[150px] justify-center items-center">
          <Link
            href={"https://www.linkedin.com/in/tammarat-chansamorn-3240b9227/"}
            target="_blank"
          >
            <Image alt="" src={linkin} className="w-full h-auto " />
          </Link>
        </div>
        <div className="w-[100px] h-[100px] border p-1 rounded-full bg-slate-50  ease-in-out duration-700 hover:h-[150px] flex justify-center items-center">
          <Link href={"https://www.instagram.com/time._time/"} target="_blank">
            <Image alt="" src={ig} className="w-full h-auto " />
          </Link>
        </div>
        <div className="w-[100px] h-[100px] bg-slate-50  border rounded-full  ease-in-out duration-700 hover:h-[150px] flex justify-center items-center">
          <Link
            href={"https://www.facebook.com/profile.php?id=100002225246237"}
            target="_blank"
          >
            <Image alt="" src={facebook} className="w-full h-auto " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
