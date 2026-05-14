import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Membership from '@/components/Membership';
import PortalPreview from '@/components/PortalPreview';
import CallToAction from '@/components/CallToAction';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Membership />
      <PortalPreview />
      <CallToAction />
      <FAQ />
      <Footer />
    </main>
  );
}
