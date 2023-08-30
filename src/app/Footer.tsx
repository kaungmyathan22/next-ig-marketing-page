"use client";
import ArrowDown from "@/components/Icons/ArrowDown";
import SocialIcon from "@/components/Icons/SocialIcon";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function Footer({}) {
  return (
    <footer className="pt-20 ">
      <div className="max-w-[976px] pb-[60px]  mx-auto flex items-center justify-between border-b border-[#E3E3EA]">
        <Fade direction="bottom-left" triggerOnce>
          <Image
            src="/footer-logo.png"
            alt="Logo"
            width={113}
            height={30}
            objectFit="contains"
          />
        </Fade>
        <ul className="flex items-center gap-x-8 text-base text-[#333] font-medium">
          <Fade direction="bottom-left" triggerOnce delay={400}>
            <li className="flex items-center gap-x-1">
              <p>Solution</p>
              <ArrowDown className="fill-[#7A7A7A]" />
            </li>
          </Fade>
          <Fade direction="bottom-left" triggerOnce delay={600}>
            <li>Plans</li>
          </Fade>
          <Fade direction="bottom-left" triggerOnce delay={800}>
            <li>Resource</li>
          </Fade>
          <Fade direction="bottom-left" triggerOnce delay={1000}>
            <li>Blog</li>
          </Fade>
        </ul>
        <Fade direction="up" triggerOnce>
          <SocialIcon />
        </Fade>
      </div>
      <div className=" py-[30px]">
        <Fade direction="up" triggerOnce>
          <p className="text-[#959595] text-[11px] font-extrabold text-center">
            Copyright © 2020 Besnik
          </p>
        </Fade>
      </div>
    </footer>
  );
}
