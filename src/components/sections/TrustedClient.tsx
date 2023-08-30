import AsanaIcon from "@/components/Icons/AsanaIcon";
import BuzzFeedIcon from "@/components/Icons/BuzzFeed";
import ChaseIcon from "@/components/Icons/ChaseIcon";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import TogglIcon from "@/components/Icons/TogglIcon";
import WalmartIcon from "@/components/Icons/WalmartIcon";
import Container from "@/components/UI/Container";

export function TrustedClient() {
  return (
    <section>
      <Container>
        <div className="flex flex-col mt-[300px] pb-[30px]">
          <h3 className="text-[#B2B7BE] text-base font-bold text-center">
            SOME OF OUR TRUSTED CLIENTS
          </h3>
          <div className="flex items-center justify-between mt-[71px]">
            <ChaseIcon />
            <AsanaIcon />
            <GoogleIcon />
            <BuzzFeedIcon />
            <TogglIcon />
            <WalmartIcon />
          </div>
        </div>
      </Container>
    </section>
  );
}
