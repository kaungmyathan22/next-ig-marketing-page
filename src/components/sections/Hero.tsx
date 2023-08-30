/* eslint-disable @next/next/no-img-element */
import ArrowRightIcon from "../Icons/ArrowRightIcon";
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
        <Container>
          <div className="flex relative">
            <div className="flex flex-col items-start mt-[280px]">
              <h1
                className="text-[#111439] font-bold text-[94px] leading-[108px] gradient-text"
                style={{}}
              >
                Tell a better
                <br /> brand story
              </h1>
              <p className="mt-5 text-[#425466] text-base font-extrabold leading-[30px]">
                Automate the way you search through hashtags and suggested
                <br /> profiles to find results 100x faster.
              </p>
              <button className="flex items-center justify-center gap-x-[30px] px-10 py-5 rounded-[26px] bg-[#231A36] mt-10 text-white h-[52px]">
                <p className="text-[15px] font-medium">Subscribe</p>
                <ArrowRightIcon className="fill-white" />
              </button>
            </div>
          </div>
          {/* <div className="z-10 inset-0 relative w-full h-full">

          <div
            className="rounded-lg bg-white w-[309px] h-[290px] py-[30px] px-5 flex flex-col absolute -right-6 bottom-0"
            style={{
              boxShadow: "0px 28px 60px -12px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <InstagramIcon />
                <p className="text-[#333]">Media Type</p>
              </div>
              <MedaTypeActionIcon />
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
        </div> */}
        </Container>
      </div>
    </section>
  );
}
