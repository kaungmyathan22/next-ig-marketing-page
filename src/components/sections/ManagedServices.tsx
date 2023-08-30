import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import BlueCircleIcon from "@/components/Icons/BlueCircleIcon";
import OrangeCircleIcon from "@/components/Icons/OrangeCircleIcon";
import PinkCircleIcon from "@/components/Icons/PinkCircleIcon";
import StatsCircleIcon from "@/components/Icons/StatsCircleIcon";
import Container from "@/components/UI/Container";

export function ManagedServices({}) {
  return (
    <section className="pt-[25px] pb-[70px]">
      <Container>
        <div className=" flex items-center gap-x-[97px] justify-center mx-auto">
          <div className="flex flex-col">
            <h5 className="text-[#DE2879] text-sm font-semibold uppercase tracking-[2.8px] leading-[18px] mb-2">
              services
            </h5>
            <h2 className="text-[#1F1F26] text-3xl font-semibold leading-10 mb-[14px]">
              Managed services
            </h2>
            <p className="text-[#426666] text-base font-extrabold leading-7 tracking-[0.16px] mb-[30px]">
              Our full-service solution lets our experts do
              <br /> the heavy lifting to optimize your community
              <br /> for brand building and storytelling
            </p>
            <button className="flex items-center gap-x-3">
              <p className="text-[15px] font-medium text-[#42424A]">
                Learn More
              </p>
              <ArrowRightIcon className="fill-[#42424A]" />
            </button>
          </div>
          <div
            className="flex flex-col bg-white  p-[30px] gap-y-6"
            style={{
              boxShadow: "-8px 30px 80px -25px rgba(82, 82, 82, 0.10)",
            }}
          >
            <h3 className="text-[#7C89A9] text-[13px] font-extrabold text-center ">
              Earning By Platform Type
            </h3>
            <StatsCircleIcon />
            <div className="flex justify-between items-center gap-x-4">
              <div className="flex items-center gap-x-1">
                <BlueCircleIcon />
                <p className="text-[#7C89A9] text-[10px] font-extrabold text-center tracking-[0.1px]">
                  Instagram
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <PinkCircleIcon />
                <p className="text-[#7C89A9] text-[10px] font-extrabold text-center tracking-[0.1px]">
                  Dribble
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <OrangeCircleIcon />
                <p className="text-[#7C89A9] text-[10px] font-extrabold text-center tracking-[0.1px]">
                  Twitter
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
