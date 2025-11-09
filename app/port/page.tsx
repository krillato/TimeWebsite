"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import "./animation.css";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Portfolio3D = dynamic(
  () => wait(0).then(() => import("../components/animation/port3d")),
  { ssr: false, suspense: true }
);

function Loader() {
  return (
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        animation: "fadeIn .3s ease-out",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn { from {opacity:0} to {opacity:1} }
        .loader-container{height:120px;display:flex;align-items:center;}
        .loader-svg{width:240px;height:60px;overflow:visible}
      `,
        }}
      />
      <div className="loader-container">
        <svg
          className="loader-svg"
          viewBox="0 0 120 30"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Loading"
        >
          <circle cx="15" cy="15" r="8" fill="#3b82f6">
            <animate
              attributeName="cy"
              values="15;7;15;15"
              dur="1.6s"
              keyTimes="0;0.3;0.6;1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
              calcMode="spline"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="fill"
              values="#3b82f6;#6366f1;#8b5cf6;#3b82f6"
              dur="1.6s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="45" cy="15" r="8" fill="#3b82f6">
            <animate
              attributeName="cy"
              values="15;7;15;15"
              dur="1.6s"
              keyTimes="0;0.3;0.6;1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
              calcMode="spline"
              repeatCount="indefinite"
              begin="0.4s"
            />
            <animate
              attributeName="fill"
              values="#3b82f6;#6366f1;#8b5cf6;#3b82f6"
              dur="1.6s"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </circle>
          <circle cx="75" cy="15" r="8" fill="#3b82f6">
            <animate
              attributeName="cy"
              values="15;7;15;15"
              dur="1.6s"
              keyTimes="0;0.3;0.6;1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
              calcMode="spline"
              repeatCount="indefinite"
              begin="0.8s"
            />
            <animate
              attributeName="fill"
              values="#3b82f6;#6366f1;#8b5cf6;#3b82f6"
              dur="1.6s"
              repeatCount="indefinite"
              begin="0.8s"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}

export default function PagePortNewVer() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      }}
    >
      <Suspense fallback={<Loader />}>
        <Portfolio3D />
      </Suspense>
    </div>
  );
}
