import React from "react";import ast1 from "../../../Assets/WebAssets/sofnovaAssets/ast1.webp";
import ast2 from "../../../Assets/WebAssets/sofnovaAssets/ast2.webp";
import ast3 from "../../../Assets/WebAssets/sofnovaAssets/ast3.webp";
import ast4 from "../../../Assets/WebAssets/sofnovaAssets/ast4.webp";
import ast5 from "../../../Assets/WebAssets/sofnovaAssets/ast5.webp";
import ast6 from "../../../Assets/WebAssets/sofnovaAssets/ast6.webp";
import ast7 from "../../../Assets/WebAssets/sofnovaAssets/ast7.webp";
import ast8 from "../../../Assets/WebAssets/sofnovaAssets/ast8.webp";

const services = [
  {
    title: "Professional Web-Presence !",
    desc: "With over 15+ categories of websites\nGet started to make your digital Presence",
  },
  {
    title: "Web Application",
    desc: "We can build custom application according to your requirements\nLeave the technicals to us!",
  },
  {
    title: "Inteli Developments",
    desc: "We will build it for you with less headache for you..",
  },
  {
    title: "Development Planning",
    desc: "We will give you strategies from head - toe !",
  },
  {
    title: "Professional Dev-designs",
    desc: "Got it! From UI - UX - DX",
  },
  {
    title: "Prototype",
    desc: "I guess you got the design!\nWell we can make the experience for you, we can show to bring it to life.",
  },
  {
    title: "Automations ?",
    desc: "Get it done with our innovative CRM, CMS, BSM",
  },
  {
    title: "Digital Environment for Business",
    desc: "With our professional development planning and automations we got you covered completely!",
  },
];

const portfolioImages = [ast1, ast2, ast3, ast4, ast5, ast6, ast7, ast8];

const SofNova = () => (
  <div className="w-full px-2 sm:px-6 lg:px-12 py-8">
    {/* Removed SofNova headline image */}
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 text-[#3a1311]">
      Let’s get scheduled!
    </h1>
    <div className="text-center text-xl sm:text-2xl font-bold text-[#3a1311] mb-8">
      UI/UX – Prototype – Database – Managing – Web App
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {services.map((srv) => (
        <div
          key={srv.title}
          className="border-2 border-[#3a1311] rounded-xl px-4 py-6 flex flex-col items-center text-center min-h-[140px] hover:shadow-lg transition"
        >
          <div className="font-extrabold text-xl sm:text-2xl mb-2 text-[#3a1311]">{srv.title}</div>
          <div className="text-[11px] sm:text-xs text-[#3a1311] whitespace-pre-line">{srv.desc}</div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-6 mb-6">
      <span className="font-bold text-lg text-[#3a1311]">Book an appointment?</span>
    </div>
    {/* Infinite marquee row */}
    <div className="relative w-full overflow-x-hidden py-4">
      <div
        className="flex gap-8 animate-sofmarquee"
        style={{
          width: "max-content",
          animation: "sofmarquee 30s linear infinite",
        }}
      >
        {[...portfolioImages, ...portfolioImages].map((src, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow border border-[#3a1311]/10 bg-white min-w-[260px] max-w-[320px] flex items-center justify-center"
          >
            <img
              src={src}
              alt={`portfolio${(i % 8) + 1}`}
              className="w-full h-64 object-cover object-center"
              style={{ filter: "none" }}
            />
          </div>
        ))}
      </div>
    </div>
    {/* Marquee animation style */}
    <style>
      {`
        @keyframes sofmarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-sofmarquee {
          will-change: transform;
        }
      `}
    </style>
  </div>
);

export default SofNova;