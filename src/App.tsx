import { AboutFounderSection } from './components/AboutFounderSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CTASection } from './components/CTASection';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { InfoBanner } from './components/InfoBanner';
import { PressSection } from './components/PressSection';
import { ReviewsSection } from './components/ReviewsSection';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <HeroSection />
      <PressSection />
      <BenefitsSection />
      <AboutFounderSection />
      <HowToOrderSection />
      <ReviewsSection />
      <FaqSection />
      <InfoBanner />
      <CTASection />
    </div>
  );
}

export default App;
