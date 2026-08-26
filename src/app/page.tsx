import Hero from '@/components/sections/Hero';
import Wordmark from '@/components/sections/Wordmark';
import Intro from '@/components/sections/Intro';
import FeaturedWorks from '@/components/sections/FeaturedWorks';
import Services from '@/components/sections/Services';
import Profile from '@/components/sections/Profile';
import Tenure from '@/components/sections/Tenure';
import Testimonials from '@/components/sections/Testimonials';
import Awards from '@/components/sections/Awards';
import Clients from '@/components/sections/Clients';
import Pricing from '@/components/sections/Pricing';
import Journal from '@/components/sections/Journal';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Hero />
      <Wordmark />
      <Intro />
      <FeaturedWorks />
      <Services />
      <Profile />
      <Tenure />
      <Testimonials />
      <Awards />
      <Clients />
      <Pricing />
      <Journal />
      <Faq />
      <Footer />
    </main>
  );
}
