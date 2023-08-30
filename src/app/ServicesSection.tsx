import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import Container from "@/components/UI/Container";
import Image from "next/image";

function Card({ avatar }: { avatar: string }) {
  return (
    <div className="relative">
      <Image width={360} height={300} src={avatar} alt="solution" />
      <div
        className="p-5 flex flex-col gap-y-5 absolute bg-white -bottom-[90px] rounded-b-sm rounded-l-sm"
        style={{
          boxShadow: "0px 40px 100px -30px rgba(0, 0, 0, 0.04)",
        }}
      >
        <h4 className="text-base font-semibold  text-[#3B3B43]">
          Rebel Clothing
        </h4>
        <div className="flex items-center gap-x-8">
          <div className="flex flex-col gap-y-2">
            <h6 className="text-2xl font-semibold text-[#1F1F26] leading-6">
              6.7 M
            </h6>
            <p className="text-[#ADADBA] text-[10px] leading-3 font-normal">
              FOLLOWER REACH
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h6 className="text-2xl font-semibold text-[#1F1F26] leading-6">
              56.2 K
            </h6>
            <p className="text-[#ADADBA] text-[10px] leading-3 font-normal">
              ENGAGEMENT
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[6px]">
          <p className="text-[#B33CDB] text-[15px] font-medium">Learn More</p>
          <ArrowRightIcon className="fill-[#B33CDB]" />
        </div>
      </div>
    </div>
  );
}
export function ServicesSection({}) {
  return (
    <section className="mt-10 py-[90px]">
      <Container>
        <div className="flex flex-col mb-20">
          <h1 className="text-[#1F1F26] text-[40px] font-semibold text-center">
            Solutions for every need
          </h1>
          <p className="text-center text-base text-[#426666] font-extrabold leading-7 tracking-[0.16px]">
            Join thousands of marketers and entrepreneurs for a 2-day event at
            <br />
            the forefront of social commerce.
          </p>
          <div className="flex items-center mt-20 gap-x-6">
            <Card avatar={"/solution-1.png"} />
            <Card avatar={"/solution-2.png"} />
            <Card avatar={"/solution-3.png"} />
          </div>
        </div>
      </Container>
    </section>
  );
}
