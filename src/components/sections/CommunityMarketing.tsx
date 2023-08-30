"use client";
import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import Container from "@/components/UI/Container";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function CommunityMarketing({}) {
  return (
    <section className="mt-[40px] mb-[60px]">
      <Container>
        <div className=" flex items-center gap-x-[140px] justify-center mx-auto">
          <Fade triggerOnce direction="top-left">
            <Image src="/profile.png" alt="profile" width={292} height={283} />
          </Fade>
          <Fade triggerOnce direction="top-right">
            <div className="flex flex-col">
              <h5 className="text-[#FBBA33] text-sm font-semibold uppercase tracking-[2.8px] leading-[18px] mb-2">
                Community
              </h5>
              <h2 className="text-[#1F1F26] text-3xl font-semibold leading-10 mb-[14px]">
                Community marketing
              </h2>
              <p className="text-[#426666] text-base font-extrabold leading-7 tracking-[0.16px] mb-[30px]">
                Bring your relationships to new heights with
                <br /> our community product. Discover your
                <br /> biggest enthusiasts
              </p>
              <button className="flex items-center gap-x-3">
                <p className="text-[15px] font-medium text-[#42424A]">
                  Learn More
                </p>
                <ArrowRightIcon className="fill-[#42424A]" />
              </button>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
}
