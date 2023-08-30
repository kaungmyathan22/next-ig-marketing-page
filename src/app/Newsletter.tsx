import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import Image from "next/image";

export function Newsletter({}) {
  return (
    <section className="py-8">
      <div className="max-w-[976px] mx-auto relative w-[976px] h-[322px] flex items-center justify-center rounded-b-[20px] overflow-hidden">
        <Image
          width={976}
          height={322}
          src="/new-sletter-bg.png"
          alt=""
          className="absolute"
        />
        <div className="z-10 ">
          <h1 className="text-white font-semibold text-5xl text-center">
            Subscribe our newsletter
          </h1>
          <p className="text-center my-7 text-white/80 font-bold">
            Join thousands of marketers and entrepreneurs for a 2-day event at
            <br />
            the forefront of social commerce.
          </p>
          <button className="flex items-center justify-center gap-x-[30px] px-10 py-5 rounded-[26px] bg-[#231A36] mt-7 text-white h-[52px] mx-auto">
            <p className="text-[15px] font-medium">Subscribe</p>
            <ArrowRightIcon className="fill-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
