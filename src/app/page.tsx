import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import LearningPath from '@/components/LearningPath';
import Skills from '@/components/Skills';
import ResourcesSection from '@/components/ResourcesSection';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OpenClaw 101',
  url: 'https://openclaw101.dev',
  description: '从零开始，7天掌握你的AI私人助理',
  inLanguage: 'zh-CN',
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <WhatIs />
      <LearningPath />
      <Skills />
      <ResourcesSection />
      <Community />
      <Footer />
    </main>
  );
}
