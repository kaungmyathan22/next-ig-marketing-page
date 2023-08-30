"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import BarChartIcon from "../Icons/BarChartIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import ReactionIcons from "../Icons/ReactionIcons";
import StatsActionIcons from "../Icons/StatsActionIcons";
import Container from "../UI/Container";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="hero relative h-[480px] w-full flex items-cnter justify-center">
      <img
        src="/bg-gradient.png"
        alt="Gradient Logo"
        className="w-full h-full absolute inset-0"
      />
      <Navbar />
      <div className="z-10 w-full top-[90px] inset-x-0 relative">
        <Container className="relative">
          <div className="flex gap-x-[112px]">
            <Fade delay={50} cascade triggerOnce>
              <div className="relative w-[565px]">
                <div className="flex flex-col items-start absolute top-[280px]">
                  <h1 className="text-[#111439] font-bold text-[94px] leading-[108px] gradient-text">
                    Tell a better
                    <br /> brand story
                  </h1>
                  <p className="mt-5 text-[#425466] text-base font-extrabold leading-[30px]">
                    Automate the way you search through hashtags and suggested
                    <br /> profiles to find results 100x faster.
                  </p>
                  <button className="group flex items-center justify-center gap-x-[30px] px-10 py-5 rounded-[26px] bg-[#231A36] mt-10 text-white h-[52px]">
                    <p className="text-[15px] font-medium">Subscribe</p>
                    <ArrowRightIcon className="fill-white transform group-hover:translate-x-3 transition" />
                  </button>
                </div>
              </div>
            </Fade>
            <div className="absolute flex gap-x-5 -right-[220px]">
              {/* left cards */}
              <div className="flex flex-col gap-y-7">
                {/* growth card */}
                <Fade triggerOnce direction="left">
                  <div
                    className="bg-white/20 h-[218px] w-[188px] rounded-lg p-4 relative"
                    style={{ backdropFilter: "blur(25px)" }}
                  >
                    <div className="bg-white p-[3px] rounded-full absolute -right-[24px] top-0">
                      <img
                        src="/growth-profile.png"
                        className="rounded-full w-[42px] h-[42px] object-fill "
                        alt="Growth profile"
                      />
                    </div>
                    <p className="w-[127px] text-white/90 text-center text-xl font-semibold leading-6 mx-auto mb-[27px]">
                      Amanda M. Data
                    </p>
                    <div className="bg-[#FBFBFB] rounded-lg pb-[20px] pt-[17px] px-[33px] flex flex-col gap-y-1">
                      <p className="text-[#404040] text-sm font-medium text-center">
                        Your Growth
                      </p>
                      <p className="text-[#FF4D4A] text-[30px] font-bold text-center">
                        3,000
                      </p>
                    </div>
                  </div>
                </Fade>
                {/* follower growth */}
                <Fade triggerOnce direction="bottom-left">
                  <div
                    className="flex flex-col p-5 bg-white rounded-lg"
                    style={{
                      boxShadow: "0px 40px 70px -18px rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-x-[48px]">
                      <div className="flex items-center gap-x-[10px]">
                        <InstagramIcon />
                        <p className="text-[#333px] text-sm font-medium">
                          Follower Growth
                        </p>
                      </div>
                      <StatsActionIcons />
                    </div>
                    <p className="text-[#2B2B2B] text-[22px] font-semibold">
                      16.2k{" "}
                      <span className="text-[#666] text-xs font-medium">
                        New Followers
                      </span>
                    </p>
                    <div className="flex mt-7 gap-x-6">
                      <div className="flex flex-col justify-between">
                        {["8k", "6k", "4k", "2k"].map((item) => (
                          <p
                            className="text-[10px] font-medium text-[#333]"
                            key={item}
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                      <BarChartIcon />
                    </div>
                  </div>
                </Fade>
              </div>
              {/* right card */}
              <div className="flex flex-col gap-y-6">
                <Fade triggerOnce direction="right">
                  <div
                    className="rounded-lg bg-white w-[309px] h-[290px] py-[30px] px-5 flex flex-col"
                    style={{
                      boxShadow: "0px 28px 60px -12px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <InstagramIcon />
                        <p className="text-[#333]">Media Type</p>
                      </div>
                      <StatsActionIcons />
                    </div>
                    <div className="flex items-center justify-center flex-1 relative">
                      <Image
                        src="/pink-circle.png"
                        width={209}
                        height={150}
                        alt="pile"
                      />
                    </div>
                  </div>
                </Fade>
                <Fade triggerOnce direction="right">
                  <div className="w-[380px] rounded-xl bg-white border-[1.5px] border-[#EEF0F2] p-5 flex gap-x-6">
                    <div className="py-3 px-[18px] bg-[#F3F5FA] rounded-md">
                      <p className="text-[#191124] text-[40px] font-semibold tracking-[-0.8px]">
                        14k
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-[15px]">
                      <p className="text-base font-medium text-[#8A8E97]">
                        Follower Growth
                      </p>
                      <div className="flex flex-col gap-y-2">
                        <div className="w-[208px] h-2 rounded-xl bg-[#F3F5FA]"></div>
                        <div className="w-[134px] h-2 rounded-xl bg-[#F3F5FA]"></div>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade triggerOnce direction="right">
                  <ReactionIcons />
                </Fade>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
