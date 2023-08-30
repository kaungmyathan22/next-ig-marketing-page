"use client";
import ChevronLeftIcon from "@/components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/Icons/ChevronRightIcon";
import FIcon from "@/components/Icons/FIcon";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function HappyClient({}) {
  return (
    <section className="pt-11 pb-[100px]">
      <div className="max-w-[976px] mx-auto">
        <div className="flex flex-col justify-center gap-y-[10px] mb-20">
          <Fade triggerOnce direction="up">
            <h4 className="text-[#1F1F26] text-center text-5xl font-semibold">
              Happy Clients
            </h4>
          </Fade>
          <Fade triggerOnce direction="up" delay={300}>
            <p className="text-[#426666] text-base font-extrabold leading-7 tracking-[0.16px] text-center">
              The Marketing Accountability Standards Board (MASB) endorses the
              <br />
              definitions, purposes, and constructs of classes
            </p>
          </Fade>
        </div>
        <div className="flex gap-x-[154px]">
          <Fade triggerOnce direction="left">
            <div className="flex flex-col flex-1 gap-y-10">
              <FIcon />
              <p className="text-[#6D6D6D] text-[22px] font-medium italic">
                Not weekly or monthly like other sites out <br />
                there. This ensures that we offer prospective
                <br /> homebuyers and investors with the freshest-
                <br /> hottest deals on the Internet.
              </p>
              <div className="flex items-end w-full justify-between">
                <div className="flex flex-col gap-y-3">
                  <h5 className="text-[#1C1C1D] font-bold text-[25px] ">
                    Rowhan Smith
                  </h5>
                  <p className="text-[#9C988F] text-base font-medium">
                    CEO, Foreclosure
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="border border-white transition-all hover:border-gray-300">
                    <ChevronLeftIcon />
                  </div>
                  <div className="border border-white transition-all hover:border-gray-300">
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce direction="right">
            <Image
              src="/happy-client.png"
              alt="Happy client"
              width={345}
              height={476}
              objectFit="contain"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}
