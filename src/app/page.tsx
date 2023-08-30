import { CommunityMarketing } from "../components/sections/CommunityMarketing";
import { CountSection } from "../components/sections/CountSection";
import { FeaturedClient } from "../components/sections/FeaturedClient";
import { HappyClient } from "../components/sections/HappyClient";
import { Hero } from "../components/sections/Hero";
import { InfluencerMarketing } from "../components/sections/InfluencerMarketing";
import { ManagedServices } from "../components/sections/ManagedServices";
import { Newsletter } from "../components/sections/Newsletter";
import { ServicesSection } from "../components/sections/ServicesSection";
import { TrustedClient } from "../components/sections/TrustedClient";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* trusted client */}
      <TrustedClient />
      {/* featured client */}
      <FeaturedClient />
      {/* influencer marketing */}
      <InfluencerMarketing />
      {/* community marketing */}
      <CommunityMarketing />
      {/* managed service */}
      <ManagedServices />
      {/* count section */}
      <CountSection />
      {/* serivces section */}
      <ServicesSection />
      {/* happy client */}
      <HappyClient />
      {/* newsletter */}
      <Newsletter />
      {/* footer */}
      <Footer />
    </main>
  );
}
