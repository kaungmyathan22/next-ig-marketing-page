"use client";
import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import HeartIcon from "@/components/Icons/HeartIcon";
import Container from "@/components/UI/Container";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function InfluencerMarketing({}) {
  return (
    <section className="mt-[85px] mb-[30px]">
      <Container>
        <div className=" flex items-center gap-x-[140px] justify-center mx-auto">
          <Fade triggerOnce direction="left">
            <div className="flex flex-col">
              <h5 className="text-[#B33CDB] text-sm font-semibold uppercase tracking-[2.8px] leading-[18px] mb-2">
                Influencer
              </h5>
              <h2 className="text-[#1F1F26] text-3xl font-semibold leading-10 mb-[14px]">
                Influencer marketing
              </h2>
              <p className="text-[#426666] text-base font-extrabold leading-7 tracking-[0.16px] mb-[30px]">
                Create infinite pieces of content with our <br /> influencer
                product. Build,streamline,manage <br /> large-scale influencer
                programs
              </p>
              <button className="flex items-center gap-x-3 group ">
                <p className="text-[15px] font-medium text-[#42424A]">
                  Learn More
                </p>
                <ArrowRightIcon className="fill-[#42424A] group-hover:translate-x-3 transform transition-all" />
              </button>
            </div>
          </Fade>
          <Fade triggerOnce direction="right">
            <div
              style={{
                boxShadow: "-8px 30px 80px -25px rgba(82, 82, 82, 0.10)",
              }}
              className="bg-white rounded-lg w-[240px] p-5"
            >
              <div className="flex gap-x-4">
                <Image
                  alt="avatar"
                  objectFit="contain"
                  src="/avatar.png"
                  width="42"
                  height="42"
                />
                <div className="flex flex-col gap-y-3">
                  <div className="h-[7px] w-16 bg-[#E0E0E5] rounded-lg"></div>
                  <div className="h-[6px] w-[120px] bg-[#E0E0E5] rounded-lg"></div>
                  <div className="h-[5px] w-[94px] bg-[#E0E0E5] rounded-lg"></div>
                </div>
              </div>
              <Image
                src="/mobile.png"
                alt="mobile"
                width={200}
                height={151}
                className="mt-6 rounded"
              />
              <div className="flex items-center mt-[18px] gap-x-[6px]">
                <HeartIcon />
                <p className="text-[#171717] text-xl font-medium">
                  23.8k{" "}
                  <span className="text-sm font-medium text-[#666] ">
                    Likes
                  </span>
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
}
