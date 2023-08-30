import ArrowDown from "@/components/Icons/ArrowDown";
import Image from "next/image";

export function Navbar({}) {
  return (
    <nav className="absolute top-0 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-[30px]">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={113}
            height={30}
            objectFit="contains"
          />
        </div>
        <ul className="flex items-center gap-x-8 text-base text-white font-medium">
          <li className="flex items-center gap-x-1">
            <p>Solution</p>
            <ArrowDown className="fill-white" />
          </li>
          <li>Plans</li>
          <li>Resource</li>
          <li>Blog</li>
        </ul>
        <button
          className=" h-[42px] w-[154px] bg-white/20 rounded-[21px] grid place-content-center"
          style={{
            backdropFilter: "blur(35px)",
          }}
        >
          <p className=" font-medium text-[15px] text-[#FFFAF9]">
            Request Demo
          </p>
        </button>
      </div>
    </nav>
  );
}
