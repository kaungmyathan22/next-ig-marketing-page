import ArrowDown from "@/components/Icons/ArrowDown";
import SocialIcon from "@/components/Icons/SocialIcon";
import Image from "next/image";

export function Footer({}) {
  return (
    <footer className="pt-20 ">
      <div className="max-w-[976px] pb-[60px]  mx-auto flex items-center justify-between border-b border-[#E3E3EA]">
        <Image
          src="/footer-logo.png"
          alt="Logo"
          width={113}
          height={30}
          objectFit="contains"
        />
        <ul className="flex items-center gap-x-8 text-base text-[#333] font-medium">
          <li className="flex items-center gap-x-1">
            <p>Solution</p>
            <ArrowDown className="fill-[#7A7A7A]" />
          </li>
          <li>Plans</li>
          <li>Resource</li>
          <li>Blog</li>
        </ul>
        <SocialIcon />
      </div>
      <div className=" py-[30px]">
        <p className="text-[#959595] text-[11px] font-extrabold text-center">
          Copyright © 2020 Besnik
        </p>
      </div>
    </footer>
  );
}
