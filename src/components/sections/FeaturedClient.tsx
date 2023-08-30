import Container from "@/components/UI/Container";

export function FeaturedClient({}) {
  return (
    <section className="mt-[82px]">
      <Container>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="text-[#1F1F26] text-[40px] font-semibold text-center">
            Solutions for every need
          </h3>
          <p className="text-[#426666] font-extrabold text-base text-center leading-7 tracking-[0.16px]">
            Join thousands of marketers and entrepreneurs for a 2-day event at
            <br />
            the forefront of social commerce.
          </p>
        </div>
      </Container>
    </section>
  );
}
