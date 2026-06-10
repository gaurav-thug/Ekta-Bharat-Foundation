import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ImpactSection } from "@/components/home/impact-section";
import { CampaignsSection } from "@/components/home/campaigns-section";
import { GetInvolvedSection } from "@/components/home/get-involved-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <CampaignsSection />
      <GetInvolvedSection />
      <ContactSection />
    </Layout>
  );
}
