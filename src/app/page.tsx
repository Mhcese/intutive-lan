import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { WhyNotChatGPT } from "@/components/marketing/why-not-chatgpt";
import { ReportDemo } from "@/components/marketing/report-demo";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Pricing } from "@/components/marketing/pricing";
import { Faq } from "@/components/marketing/faq";
import { WaitlistSection } from "@/components/marketing/waitlist-section";
import { Footer } from "@/components/marketing/footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyNotChatGPT />
        <ReportDemo />
        <HowItWorks />
        <Pricing />
        <Faq />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
