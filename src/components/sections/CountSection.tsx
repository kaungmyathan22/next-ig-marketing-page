import Container from "@/components/UI/Container";

export function CountSection({}) {
  return (
    <div className="mt-10 bg-[#231A36] py-[120px]">
      <Container>
        <h1 className="font-semibold text-[40px] text-center text-white leading-[50px]">
          Search through more than 11 million
          <br /> social media profiles
        </h1>
        <p className="text-[#7B9292] text-base font-extrabold text-center leading-7 tracking-[0.16px] mt-[18px]">
          Heepsy’s search filters help you find exactly what you’re looking for,
          and
          <br /> our influencer reports provide you with the metrics
        </p>
        <div className="flex items-center mt-[110px] gap-x-[148px] justify-center">
          <CountItem count={2260} subTitle="Satisfied Brands" />
          <CountItem count={1324} subTitle="Satisfied Clients" />
          <CountItem count={3453} subTitle="Sponsored" />
          <CountItem count={9786} subTitle="Completed" />
        </div>
      </Container>
    </div>
  );
}
function CountItem({ count, subTitle }: { count: number; subTitle: string }) {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <h6 className="text-white font-semibold leading-10 text-4xl">{count}</h6>
      <p className="text-sm font-extrabold text-[#7B9292]">{subTitle}</p>
    </div>
  );
}
