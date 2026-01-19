
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import SocialProof from './components/SocialProof';
import ServicesExpandable from './components/ServicesExpandable';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Trust from './components/Trust';
import TestimonialsCards from './components/TestimonialsCards';
import FAQ from './components/FAQ';
import SmartQuote from './components/SmartQuote';
import CTASoft from './components/CTASoft';
import CTAStrong from './components/CTAStrong';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        
        <SectionDivider label="Proof" number="01" />
        <SocialProof />
        
        <SectionDivider label="Capabilities" number="02" light />
        <ServicesExpandable />
        
        <SectionDivider label="Values" number="03" light />
        <Benefits />
        
        <SectionDivider label="Workflow" number="04" />
        <Process />
        
        <SectionDivider label="Reliability" number="05" light />
        <Trust />
        
        <SectionDivider label="Reputation" number="06" light />
        <TestimonialsCards />
        
        <SectionDivider label="Assistance" number="07" light />
        <FAQ />
        
        <SectionDivider label="Direct Quote" number="08" light />
        <SmartQuote />
        
        <SectionDivider label="Next Steps" number="09" />
        <CTASoft />
        
        <CTAStrong />
      </main>
      <Footer />
    </div>
  );
};

export default App;
